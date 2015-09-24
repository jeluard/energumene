(ns energumene.util.ring)

(def content-type "content-type")

(defn response
  ([s]
    {:status s :body ""}))

(def no-resource-found {:status 404 :body ""})
(def no-content {:status 204 :body ""})
(def method-not-allowed {:status 405 :body ""})

(defn success
  [s]
  {:status 200 :body s :headers {content-type "application/vnd.api+json"}})

(defn error
  [s]
  {:status 400 :body s :headers {content-type "application/vnd.api+json"}})

(defn created
  [s]
  {:status 201 :body s :headers {content-type "application/vnd.api+json"}})

(defn valid-request?
  [m]
  (let [b (:body m)
        m (:headers m)]
    (and
      (or (:uri m) (:url m))
      (or (:request-method m) (:method m))
      (or (nil? b) (string? b))
      (and (map? m) (every? (fn [[k v]] (and (string? k) (string? v))) m)))))

(defn valid-response?
  [m]
  (let [s (:status m)
        b (:body m)
        m (:headers m)]
    (and
      (or (nil? s) (integer? s))
      (or (nil? b) (string? b))
      (and (map? m) (every? (fn [[k v]] (and (string? k) (or (string? v) (sequential? v)))) m)))))