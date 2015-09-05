(ns energumene.ui.component.browser
  (:require [lucuma.core :as l]
            [picada.component :refer-macros [defcomponent]]
            [happy.core :as h]
            [happy.client.xmlhttprequest :as hc]
            [cljs.core.async :as async :refer [<!]])
  (:require-macros [cljs.core.async.macros :as m :refer [go go-loop]]))

(h/set-default-client! (hc/create))

(defn fetch-details
  []
  (h/send! {:method :get :url "http://localhost:4000/" :headers {"accept" "application/vnd.api+json"}}
           {:report-progress? true :handler #(.log js/console (clj->js %))})
  #_
  (go (let [resp (<! (GET "http://localhost:3000/" {:headers {"accept" "application/vnd.api+json"}}))]
        (.log js/console (clj->js resp)))))

(defcomponent ene-browser
  :document
  (fn [_ {:keys [uri]}]
    [:host
     [:span "URI"]
     [:span uri]])
              :on-created fetch-details
  :on-property-changed #(.log js/console %1 %2)
  :properties {:uri ""})