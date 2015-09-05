(ns energumene.handler
  (:require [clojure.string :as string]
            [energumene.core :as ene]
            [energumene.util.json-api :as jsona]
            [energumene.util.schema :as sch]
            [energumene.util.ring :as ring]
            [cheshire.core :as che]))

(def mime "application/vnd.api+json")

(defn entity-exists?
  [e v]
  (boolean (some #{e} v)))

(defn path
  [uri]
  (let [v (string/split uri #"/")]
    (if (empty? v)
      v
      (subvec v 1))))

(defn merge-relationships
  [m em]
  (let [v (sch/relationships em)]
    (println "m" m)
    (-> {"id" (get m "id") "attributes" (apply dissoc m (conj v "id"))}
        (assoc "relationships" (into {} (map (fn [e] [e {"data" {"type" (sch/referencing (get em e)) "id" (get m e)}}])) v)))))

(defn fetch
  [st e ems ids m]
  ; -query returns either map (error) or seq (results)
  (println (get ems e))
  (if ids
    (let [o (ene/-query st (into [] (map (fn [id] {:type e "id" id})) ids) m)]
      (cond
        (map? o) {:type :error :value o}
        (not (empty? o)) {:type :success :value (merge-relationships (first o) (get ems e))}
        :else {:type :not-found}))
    {:type :success :value (mapv #(merge-relationships % (get ems e)) (ene/-query-all st e m))}))

(defn dispatch-fetch
  [st e ems v m]
  (condp = (count v)
    1 (fetch st e ems nil m) ; http://host/users
    2 ; http://host/users/1 or http://host/users/1,2
    (let [ids (string/split (second v) #",")]
      (fetch st e ems ids m))
    3 ; http://host/users/1/name
    nil
    4
    nil ; http://host/users/1/relationships/mother
    ))

(defn returned-value
  [r m]
  (assert (map? m))
  (assoc m "type" r)
  #_
  {"type" r "id" (get m "id") :attributes ""})

(defn fetch-response
  [r o e]
  (let [pr {} #_{:links {:self ""}}
        r (if o
            (assoc pr :data (if (map? o) (returned-value r o) (map (fn [m] (returned-value r m)) o)))
            (assoc pr :errors [{:error e}]))
        b (che/generate-string r)]
    (if o
      (ring/success b)
      {:status 400 :body b})))

(defn create
  [st r s ev]
  (with-open [rea (clojure.java.io/reader s)]
    (let [m (che/parse-stream rea)
          d (get m "data")
          am (get d "attributes")
          ; TODO missing relationships
          ]

      (assert (not (contains? d "id")) "Client-side generated IDs are disallowed")
      (cond
        (not (contains? d "type")) {:status 403 :body ""}
        (not (entity-exists? (get d "type") ev)) {:status 409 :body ""}
        ; TODO herbert validation
        :else
        (let [o (ene/-store st [(assoc am :type r)])]
          (if (map? o)
            {:status 400 :body ""}
            (che/generate-string
              (-> m
                  (assoc-in ["data" "id"] (first o))
                  (assoc-in ["data" "links"] [{:self ""}])))))))))

(defn entity-from-resource
  "resource are plural for API but singular in schema"
  [r]
  (subs r 0 (dec (count r))))

(defn resource-from-entity
  [t]
  (str t "s"))

(defn header
  [req t]
  (get-in req [:headers t]))

(defn get-method
  [req e ems v st m]
  (if (= jsona/mime-type (header req "accept"))
    (let [o (dispatch-fetch st e ems v m)]
      (condp = (:type o)
        :success (fetch-response e (:value o) nil)
        :error (fetch-response e nil (:value o))
        :not-found ring/no-resource-found
        {}))
    {:status 415 :body ""}))

(defn post-method
  [req st r ev]
  ; TODO response with link:self, same value as location header
  ; location and content-type headers
  (cond
    (not= jsona/mime-type (header req "accept")) {:status 415 :body ""}
    (not= jsona/mime-type (header req "content-type")) {:status 415 :body ""}
    :else
    (let [o (create st r (:body req) ev)]
      (if (string? o)
        (ring/created o)
        o))))

(defn delete-method
  [req st r v]
  (cond
    (not= jsona/mime-type (header req "accept")) {:status 415 :body ""}
    :else
    (if (first (ene/-delete st [{:type r :id (second v)}]))
      ring/no-content
      ring/no-resource-found)))

(defn create-response
  [req i b]
  ; CORS
  ; si pas d'Origin, pas de CORS
  ; si Origin:
  ; et :enable-foreign-origins => headers
  ; si non: only if same domain / subdomains
  (let [s (get-in req [:headers "origin"])
        cm {"Access-Control-Allow-Origin" "*" "Access-Control-Allow-Methods" "GET, POST, OPTIONS"}]
    (println "origin" s)
    {:status i :body (or b "") :headers (if b (assoc cm "content-type" mime) cm)}))

(defn handle-top-level
  [req ev]
  (create-response req 200
                   (che/generate-string {:jsonapi "1.0.0" :data nil
                                         :links (into [] (map (fn [e] {e {"href" (str "/" (resource-from-entity e)) "meta" {}}})) ev)}))
  #_
  {:status 200 :body (che/generate-string {:jsonapi "1.0.0" :data nil
                                           :links (into [] (map (fn [e] {e {"href" (str "/" (resource-from-entity e)) "meta" {}}})) ev)})})

(defn parse-sort
  [s]
  {:sort (into [] (map (fn [s] (let [t (if (= \- (first s)) :desc :asc)]
                                 {:type t :field (if (= t :asc) s (subs s 1))})))
               (clojure.string/split s #","))})

(defn parse-fields
  [s]
  )

(defn parse-query-string
  [s]
  (if s
    (let [v (clojure.string/split s #"")]
      ; one sort
      ; one include
      ; multiple fields fields[articles]=title,body&fields[people]=name
      ; multiple page page[offset]=10 page[limit]=5
      ; one filter filter[post]=1,2&filter[author]=12
      ; one include include=author,comments.author
      nil)))

(defn handle-resource
  [req v st ev ems]
  (let [f (first v)
        e (entity-from-resource f)]
    (if (entity-exists? e ev)
      (case (:request-method req)
        :get (get-method req e ems v st (parse-query-string (:query-string req)))
        :post (post-method req st e ev)
        :delete (delete-method req st e v)
        :head {:status 200 :body "HEAD, GET, POST, PATCH, DELETE"}
        ring/method-not-allowed)
      ring/no-resource-found)))

(defn handler
  [st m]
  (let [ev (into [] (map name) (keys (:entities m)))]
    (fn [req]
      (let [v (path (:uri req))]
        (if (empty? v)
          (if (= :get (:request-method req))
            (handle-top-level req ev)
            ring/method-not-allowed)
          (handle-resource req v st ev (:entities m)))))))