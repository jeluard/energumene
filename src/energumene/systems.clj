(ns energumene.systems
  (:require
   [energumene.handler :refer [handler]]
   [energumene.entities :as entities]
   [energumene.jdbc :as jdbc]
   [environ.core :refer [env]]
   [com.stuartsierra.component :as component]
   (system.components
    [aleph :refer [new-web-server]]
    [h2 :refer [new-h2-database] :as h2]
    [repl-server :refer [new-repl-server]])))

(defn dev-system
  []
  (component/system-map
    :web (new-web-server (Integer. (env :http-port)) handler)
    :db (new-h2-database h2/DEFAULT-MEM-SPEC)
    :storage (component/using (jdbc/map->JDBCStorageComponent {:conf {:entities entities/all}}) [:db])))

(defn prod-system
  []
  (component/system-map
    :web (new-web-server (Integer. (env :http-port)) handler)
    :repl-server (new-repl-server (Integer. (env :repl-port)))))
