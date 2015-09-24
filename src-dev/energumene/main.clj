(ns energumene.main
  (:require [energumene.core :as core]
            [energumene.entities :as en]
            [energumene.store.jdbc :as jdbc]
            [energumene.handler :as han]
            [aleph.http :as http]))

(def DEFAULT-DB-SPEC
  {:classname   "org.h2.Driver" ; must be in classpath
   :subprotocol "h2"
   :subname "mem:test"
   :user     "sa"
   :password ""
   :host "127.0.0.1"
   :DB_CLOSE_DELAY "-1"})

; https://github.com/sunng87/ring-jetty9-adapter
; https://github.com/dgrnbrg/spiral
; https://github.com/mpenet/jet
; http://sunng.info/blog/blog/2015/07/25/ring-on-http2/

(defn -main
  [& args]
  (let [m {:entities en/all}
        s (jdbc/->JDBCStore DEFAULT-DB-SPEC m)]
    (core/-startup s)
    (http/start-server (han/handler s m) {:port 4000})
    (println "RUNNING")))


