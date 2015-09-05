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

(defn created
  [s]
  {:status 201 :body s :headers {content-type "application/vnd.api+json"}})