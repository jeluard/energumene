(ns energumene.handler
  (:require [domkm.silk.serve :as silk]))

(def routes
  {:root [[]]
   :path [[:path]]})

(defn handler
  [req]
  {:status 200
   :headers {"content-type" "text/plain"}
   :body "hello root!"})

(defn handlers
  [s]
  (println "route:" s)
  (case s
    ;:root handler
    (fn [req]
      (println (:params req))
      {:status 200
       :headers {"content-type" "text/plain"}
       :body (str "hello other!" )})))

(def handler #_(fn [req] {:status 200}) (silk/ring-handler routes handlers)
  #_
  {:status 200
   :headers {"content-type" "text/plain"}
   :body "hello!"})
