(ns energumene.jdbc
  (:require [clojure.java.jdbc :as jdbc]
            [energumene.core :as core]
            [com.stuartsierra.component :as component]))

; https://github.com/mbuczko/boot-flyway

(defmulti schema-type->ddl-type identity)
(defmethod schema-type->ddl-type :string [o] "VARCHAR(32)")
(defmethod schema-type->ddl-type :int [o] :int)
(defmethod schema-type->ddl-type :num [o] :real)

(defn create-table-ddl-from-schema
  [m]
  (apply jdbc/create-table-ddl
    (:entity m)
    (for [[k v] (:schema m)]
      [k (schema-type->ddl-type v)])))

#_
  (defn test-jdbc
    []
    ; use get-connection and pass :connection as db-spec to reuse connection
    (let [db {:connection (jdbc/get-connection db-spec)}]

    (jdbc/db-do-commands
     db
       (jdbc/create-table-ddl
         :fruit
         [:id :int]
         [:name "VARCHAR(32)"]
         [:appearance "VARCHAR(32)"]
         [:cost :int]
         [:grade :real]
         :table-spec ""))
         #_
    (jdbc/insert! db :fruit
      {:name "Apple" :appearance "rosy" :cost 24}
      {:name "Orange" :appearance "round" :cost 49})
      #_
    (println
      (jdbc/query db
        ["select * from fruit where appearance = ?" "rosy"]
        :row-fn :cost))))

(defrecord JDBCStorage [db]
  core/Storage
  (-startup [_ m]
    (jdbc/db-do-commands db
      (for [e (:entities m)]
        (create-table-ddl-from-schema e)))
    #_
    (jdbc/insert! :user {:name "julien"}))
  (-store [_ s]
    (doseq [m s]
      (jdbc/insert! (:type m) (dissoc m :type)))))

(defrecord JDBCStorageComponent [db conf]
  component/Lifecycle

  (start [component]
    ; db holds a :connection as expected by java.jdbc
    (let [s (JDBCStorage. db)]
      (core/-startup s conf)))

  (stop [component]
    ))
