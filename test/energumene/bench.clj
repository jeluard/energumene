(ns energumene.bench
  (:require [energumene.core :as ene]
            [energumene.handler :as han]
            [energumene.store.jdbc :as ejdbc]
            [jdbc.core :as jdbc]
            [ring.mock.request :as req]
            [cheshire.core :as che]
            [criterium.core :as cri]))

(def DEFAULT-DB-SPEC
  {:classname   "org.h2.Driver" ; must be in classpath
   :subprotocol "h2"
   :subname "mem:test"
   :user     "sa"
   :password ""
   :host "127.0.0.1"
   :DB_CLOSE_DELAY "-1"})

(defn accept-header [req] (req/header req "accept" "application/vnd.api+json"))

(defn bench
  []
  (let [m {:entities {:user {"name" 'str}}}
        st (ejdbc/->JDBCStore DEFAULT-DB-SPEC m)
        h (han/handler st m)]
    (ene/-startup st)

    (cri/bench (h (-> (req/request :get "/") accept-header)))))