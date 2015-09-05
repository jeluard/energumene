(ns happy.client.xmlhttprequest
  (:require [clojure.string :as string]
            [happy.core :as h :refer [Client]]))

; A Client implementation for browsers based on https://xhr.spec.whatwg.org

(defn- parse-headers
  [s]
  (let [headers (string/replace s #"\n$" "")
        lines (string/split-lines headers)]
    (into {}
          (for [line lines
                :let [[k v] (string/split line #":" 2)]]
            [(string/lower-case (string/trim k)) (string/trim v)]))))

(defn method->string [k] (string/upper-case (name k)))

(defn progress-details
  [evt]
  (if (.-lengthComputable evt)
    {:loaded (.-loaded evt) :total (.-total evt)}))

(defn send!
  [c {:keys [url method headers body authentication]} {:keys [handler with-credentials? timeout report-progress? body-as]}]
  (let [xhr (js/XMLHttpRequest.)
        s (method->string method)]
    (if with-credentials? (set! (.-withCredentials xhr) true))
    (if body-as (set! (.-responseType xhr) (name body-as)))
    (if timeout (set! (.-timeout xhr) timeout))
    (if (and (map? authentication)
             (contains? authentication :username)
             (contains? authentication :password))
      (.open xhr s url true (:username authentication) (:password authentication))
      (.open xhr s url true))
    (doseq [[k v] headers] ; TODO dissoc if FormData is used
      (.setRequestHeader xhr k v))
    (when handler
      ; load, abort, error and timeout are mutually exclusive
      (set! (.-onload xhr) #(handler (h/response c xhr)))
      (set! (.-onabort xhr) #(handler (h/failure :abort)))
      (set! (.-onerror xhr) #(handler (h/failure :network)))
      (set! (.-ontimeout xhr) #(handler (h/failure :network)))
      (when report-progress?
        (set! (.-onprogress xhr) #(handler (h/progress :receiving (progress-details %))))
        (set! (.-onreadystatechange xhr) #(let [i (.. % -target -readyState)] (if (= 2 i) (handler (h/progress :headers-received)))))
        (let [t (if body (.-upload xhr) xhr)]
          (set! (.-onprogress t) #(handler (h/progress :sending))))))
    (if body
      (.send xhr body)
      (.send xhr))
    xhr))

(defn create
  [& options]
  (reify Client
    (-supports [_]
      {:progress true
       :timeout true
       :stream false
       :request-body-as #{}
       :response-body-as #{:arraybuffer :blob}
       })
    (-send! [c req m] (send! c req (merge options m)))
    (-abort [_ xhr] (.abort xhr))
    (-status [_ xhr] (.-status xhr))
    (-header [_ xhr s] (.getResponseHeader xhr s))
    (-headers [_ xhr] (parse-headers (.getAllResponseHeaders xhr)))
    (-body [_ xhr] (.-response xhr))))