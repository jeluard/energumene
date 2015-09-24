(ns energumene.ui.component.browser
  (:require [lucuma.core :as l]
            [picada.component :refer-macros [defcomponent]]
            [happy.core :as h :refer [GET POST]]
            [happy.interceptors :as hi]
            [happy.representors :as hr]
            [happy.client.xmlhttprequest :as hc]))

(defn default-headers-interceptor
  [[req om :as m]]

  (if-let [hm (get-in om [:default-headers (:method req)])]
    [(update req :headers #(merge hm %)) om]
    m))

(h/merge-options! {:handler #(.log js/console (clj->js %))
                   :request-interceptors [hi/timing-interceptor default-headers-interceptor]
                   :default-headers
                   {"GET" {"accept" "application/vnd.api+json"}
                    "POST" {"accept" "application/vnd.api+json" "content-type" "application/vnd.api+json"}}})

(h/set-default-client! (hc/create))

(defn fetch-details
  []
  (GET "http://localhost:4000/" {} {:handler #(.log js/console "USERS" (clj->js %))})
  (POST "http://localhost:4000/users"
        {"data" {"type" "user" "attributes" {"name" "john"}}})
  (GET "http://localhost:4000/users" {} {:handler #(.log js/console "USERS" (clj->js %))}))

(defcomponent ene-browser
  :document
  (fn [_ {:keys [uri]}]
    [:host
     [:span "URI"]
     [:span uri]])
  :on-created fetch-details
  :on-property-changed #(.log js/console %1 %2)
  :properties {:uri ""})