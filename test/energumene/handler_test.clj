(ns energumene.handler-test
  (:require [clojure.test :refer [deftest is testing use-fixtures]]
            [energumene.core :as ene]
            [energumene.handler :as han]
            [energumene.store.jdbc :as ejdbc]
            [jdbc.core :as jdbc]
            [ring.mock.request :as req]
            [cheshire.core :as che]))

(def DEFAULT-DB-SPEC
  {:classname   "org.h2.Driver" ; must be in classpath
   :subprotocol "h2"
   :subname "mem:test"
   :user     "sa"
   :password ""
   :host "127.0.0.1"
   :DB_CLOSE_DELAY "-1"})

(defn clear-db
  [f]
  (with-open [conn (jdbc/connection DEFAULT-DB-SPEC)]
    (jdbc/execute conn "DROP ALL OBJECTS"))
  (f)
  (with-open [conn (jdbc/connection DEFAULT-DB-SPEC)]
    (jdbc/execute conn "DROP ALL OBJECTS")))

(use-fixtures :each clear-db)

(defn accept-header [req] (req/header req "accept" "application/vnd.api+json"))

(defn create-entity
  [h m]
  (let [respn (h (-> (req/request :post (str "/" (:type m) "s") (che/generate-string {"data" m}))
                     accept-header
                     (req/header "content-type" "application/vnd.api+json")))]
    (get-in (che/parse-string (:body respn)) ["data" "id"])))

#_
(deftest handler-conf
  (let [m {:entities {:user {:energumene/jdbc {}
                             :energumene/access {}
                             "name" 'str
                             "age" 'int
                             "type" '(or :public :private)}}}
        st (ejdbc/->JDBCStore DEFAULT-DB-SPEC m)]
    (ene/-startup st)))

#_
(deftest handler-get
  (let [m {:entities {:user {"name" 'str}}}
        st (ejdbc/->JDBCStore DEFAULT-DB-SPEC m)
        h (han/handler st m)]
    (ene/-startup st)
    (testing "Incorrect Get"
      (let [resp (h (req/request :get "/nops"))]
        (is (= 404 (:status resp))))
      (let [resp (h (req/request :get "/users/nop"))]
        (is (= 415 (:status resp))))
      (let [resp (h (-> (req/request :get "/users/nop") accept-header))]
        (is (= 400 (:status resp)))
        (let [m (che/parse-string (:body resp))]
          (is (contains? m "errors"))
          (is (not (contains? m "data"))))))


    (testing "Get non existent resource"
      (is (= 404 (:status (h (req/request :get "/99999"))))))


    (testing "Get a user"
      (let [id (create-entity h {:type "user" "attributes" {"name" "john"}})
            resp (h (-> (req/request :get (str "/users/" id)) accept-header))]
        (is (= 200 (:status resp)))
        (let [m (che/parse-string (:body resp))]
          (is (contains? m "data"))
          (is (map? (get m "data")))
          (is (= "john" (get-in m ["data" "attributes" "name"]))))))))

#_
(deftest handler-get-all
  (let [m {:entities {:user {"name" 'str} :article {"name" 'str}}}
        st (ejdbc/->JDBCStore DEFAULT-DB-SPEC m)
        h (han/handler st m)]
    (ene/-startup st)
    (ene/-store st [{:type "user" "name" "raoul"}])
    (ene/-store st [{:type "user" "name" "henry"}])
    (testing "Get all users"
      (let [resp (h (-> (req/request :get "/users") accept-header))]
        (is (= 200 (:status resp)))
        (is (string? (:body resp)))
        (let [m (che/parse-string (:body resp))]
          (is (vector? (get m "data")))
          (is (= 2 (count (get m "data"))))
          (is (= "raoul" (get-in m ["data" 0 "attributes" "name"]))))))
    (testing "Get inexistent resource"
      (let [resp (h (-> (req/request :get "/articles") accept-header))]
        (is (= 200 (:status resp)))
        (is (string? (:body resp)))
        (let [m (che/parse-string (:body resp))]
          (is (vector? (get m "data")))
          (is (empty? (get m "data"))))))
    (testing "Get inexistent resource"
      (let [resp (h (-> (req/request :get "/nops") accept-header))]
        (is (= 404 (:status resp)))
        (is (empty? (:body resp)))))))

#_
(deftest handler-create
  (let [m {:entities {:user {"name" 'str}}}
        st (ejdbc/->JDBCStore DEFAULT-DB-SPEC m)
        h (han/handler st m)]
    (ene/-startup st)

    (testing "Create a new user fails when request is incomplete"
      (let [ib (req/request :post "/users" (che/generate-string {"data" {:type "unknown"}}))
            nb (req/request :post "/users" (che/generate-string {"data" {}}))
            b (req/request :post "/users" (che/generate-string {"data" {:type "user" "attributes" {"name" "john"}}}))]
        (is (= 415 (:status (h b))))
        (is (= 415 (:status (h (-> b accept-header)))))
        (is (= 201 (:status (h (-> b accept-header
                                     (req/header "content-type" "application/vnd.api+json"))))))
        (is (= 409 (:status (h (-> ib accept-header
                                   (req/header "content-type" "application/vnd.api+json"))))))
        (is (= 403 (:status (h (-> nb accept-header
                                   (req/header "content-type" "application/vnd.api+json"))))))))

    (testing "Create a new user"
      (let [req (-> (req/request :post "/users" (che/generate-string {"data" {:type "user" "attributes" {"name" "john"}}}))
                    accept-header
                    (req/header "content-type" "application/vnd.api+json"))
            resp (h req)
            b (che/parse-string (:body resp))]
        (is (= 201 (:status resp)))
        ; TODO check for location and content-type headers
        (is (= "user" (get-in b ["data" "type"])))
        (is (= "john" (get-in b ["data" "attributes" "name"])))
        (is (not (nil? (get-in b ["data" "id"]))))))))

#_
(deftest handler-delete
  (let [m {:entities {:user {"name" 'str}}}
        st (ejdbc/->JDBCStore DEFAULT-DB-SPEC m)
        h (han/handler st m)]
    (ene/-startup st)
    (testing "Delete a user"
      (let [id1 (create-entity h {:type "user" "attributes" {"name" "john"}})
            id2 (create-entity h {:type "user" "attributes" {"name" "bob"}})]
        (is (= 415 (:status (h (req/request :delete (str "/users/" id1))))))
        (is (= 200 (:status (h (-> (req/request :get (str "/users/" id1)) accept-header)))))
        (is (= 200 (:status (h (-> (req/request :get (str "/users/" id2)) accept-header)))))
        (is (= 204 (:status (h (-> (req/request :delete (str "/users/" id1)) accept-header)))))
        (is (= 404 (:status (h (-> (req/request :delete (str "/users/" id1)) accept-header)))))
        (is (= 404 (:status (h (-> (req/request :get (str "/users/" id1)) accept-header)))))
        (is (= 200 (:status (h (-> (req/request :get (str "/users/" id2)) accept-header)))))
        (is (= 204 (:status (h (-> (req/request :delete (str "/users/" id2)) accept-header)))))))))

#_
(deftest handler-not-allowed
  (let [m {:entities {:user {"name" 'str}}}
        st (ejdbc/->JDBCStore DEFAULT-DB-SPEC m)
        h (han/handler st m)]
    (testing "Method not allowed"
      (let [req (req/request :put "/users")
            resp (h req)]
        (is (= 405 (:status resp)))))))

#_
(deftest types
  (testing "Create a new user"
    (let [m {:entities {:user {"name" 'str "age" 'int "aa?" '(or "" "")}}}
          st (ejdbc/->JDBCStore DEFAULT-DB-SPEC m)
          _ (ene/-startup st)
          h (han/handler st m)
          req (-> (req/request :post "/users" (che/generate-string {"data" {:type "user" "attributes" {"name" "john" "age" 30 "aa" ""}}}))
                  accept-header
                  (req/header "content-type" "application/vnd.api+json"))
          resp (h req)
          b (che/parse-string (:body resp))]
      (is (= 201 (:status resp)))
      ; TODO check for location and content-type headers
      (is (= "user" (get-in b ["data" "type"])))
      (is (= "john" (get-in b ["data" "attributes" "name"])))
      (is (not (nil? (get-in b ["data" "id"]))))
      (let [id (get-in b ["data" "id"])
            r (-> (req/request :get (str "/users/" id))
                  accept-header
                  (req/header "content-type" "application/vnd.api+json"))
            u (che/parse-string (:body (h r)))]
        (println (h r))
        (is (= "" u))))))

; TODO enum
; TODO int, real
; TODO relationship
; TODO pagination
; TODO errors
; TODO meta
; TODO set, vector
; TODO revisions
; TODO user rights

#_
(deftest optional-fields
  (testing "Create a new user"
    (let [m {:entities {:user {"name" 'str "age" 'str}}}
          st (ejdbc/->JDBCStore DEFAULT-DB-SPEC m)
          _ (ene/-startup st)
          h (han/handler st m)
          req (-> (req/request :post "/users" (che/generate-string {"data" {"type" "user" "attributes" {"name" "john"}}}))
                  accept-header
                  (req/header "content-type" "application/vnd.api+json"))
          resp (h req)]
      (is (= 400 (:status resp)))))
  (testing "Create a new user"
    (let [m {:entities {:article {"name" 'str "field?" 'int}}}
          st (ejdbc/->JDBCStore DEFAULT-DB-SPEC m)
          _ (ene/-startup st)
          h (han/handler st m)
          req (-> (req/request :post "/articles" (che/generate-string {"data" {"type" "article" "attributes" {"name" "john"}}}))
                  accept-header
                  (req/header "content-type" "application/vnd.api+json"))
          resp (h req)]
      (is (= 201 (:status resp))))))

#_
(deftest sorting
  (let [m {:entities {:user {"name" 'str "age" 'int}}}
        st (ejdbc/->JDBCStore DEFAULT-DB-SPEC m)
        h (han/handler st m)]
    (ene/-startup st)
    (ene/-store st [{:type "user" "name" "raoul" "age" 30}
                    {:type "user" "name" "henry" "age" 40}])
    (testing "Get all users"
      (let [resp (h (-> (req/request :get "/users?sort=name") accept-header))]
        (is (= 200 (:status resp)))
        (is (string? (:body resp)))
        (let [m (che/parse-string (:body resp))]
          (is (vector? (get m "data")))
          (is (= 2 (count (get m "data"))))
          (is (= "raoul" (get-in m ["data" 0 "attributes" "name"]))))))))

; See http://jsonapi.org/examples/ for source

#_
(deftest parse-sort
  (is (= {:sort [{:type :asc, :field "name"} {:type :asc, :field "age"}]} (han/parse-sort "name,age")))
  (is (= {:sort [{:type :desc, :field "name"} {:type :asc, :field "age"}]} (han/parse-sort "-name,age"))))

#_
(deftest sparse-fields
  (let [m {:entities {:article {"name" 'str "author" user}}}
        st (ejdbc/->JDBCStore DEFAULT-DB-SPEC m)
        h (han/handler st m)]
    (ene/-startup st)
    ;(ene/-store st [{"type" "article" "name" "robert"}])
    (testing "Get an article with author"
      (create-entity h {"type" "article" "attributes" {"name" "article1" #_"author" #_{"type" "user" "id" 1}}})
      (let [resp (h (-> (req/request :get "/articles?include=author") accept-header))]
        (is (= 200 (:status resp)))
        (is (string? (:body resp)))
        (let [m (che/parse-string (:body resp))]
          (println m)
          (is (= 2 (count (get m "data"))))
          (is (= "article1" (get-in m ["data" 0 "attributes" "name"])))
          (is (= "article1" (get-in m ["data" 0 "relationships" "author" "data"]))))))))