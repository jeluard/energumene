(ns energumene.store.jdbc-test
  (:require [clojure.test :refer [deftest is use-fixtures testing]]
            [energumene.core :as ene]
            [energumene.store.jdbc :as ejdbc]
            [jdbc.core :as jdbc]))

(def DEFAULT-DB-SPEC
  {:classname   "org.h2.Driver" ; must be in classpath
   :subprotocol "h2"
   :subname "mem:test"
   :user     "sa"
   :password ""
   :host "127.0.0.1"
   :DB_CLOSE_DELAY "-1"})

(defn clear-db
  [f]
  (with-open [conn (jdbc/connection DEFAULT-DB-SPEC)]
    (jdbc/execute conn "DROP ALL OBJECTS"))
  (f)
  (with-open [conn (jdbc/connection DEFAULT-DB-SPEC)]
    (jdbc/execute conn "DROP ALL OBJECTS")))

(use-fixtures :each clear-db)

(deftest enum?
  (is (true? (ejdbc/enum? '(or 1)))))

(deftest enum-table-name
  (is (= "BLOG_USER_ENUM" (ejdbc/enum-table-name "blog" "user"))))

(deftest create
  (let [st (ejdbc/->JDBCStore DEFAULT-DB-SPEC {:entities {:user {"name" 'str}}})]
    (is (nil? (ene/-startup st)))))

(deftest insert
  (let [st (ejdbc/->JDBCStore DEFAULT-DB-SPEC {:entities {:user {"name" 'str}}})]
    (is (nil? (ene/-startup st)))
    (let [o (ene/-store st {"user" [{"name" "john"}]})]
      (is (map? o))
      (is (contains? o "user"))
      (is (= 1 (first (get o "user")))))
    (is (= 1 (count (ene/-query-all st "user" nil))))
    (let [{:strs [user]} (ene/-store st {"user" [{"name" "john"}]})]
      (is (= "john" (get-in (ene/-query st [{:type "user" "id" (first user)}] nil) [0 "name"]))))
    (testing "Insert incorrect values"
      (let [o (ene/-store st {"user" [{"undefined" "value"}]})]
        (is (map? o))
        (is (= :error (:type o)))))))

(deftest query
  (let [st (ejdbc/->JDBCStore DEFAULT-DB-SPEC {:entities {:user {"name" 'str "age" 'int}}})]
    (is (nil? (ene/-startup st)))
    (ene/-store st {"user" [{"name" "raoul" "age" 31}]})
    (is (not (contains? (first (ene/-query st [{:type "user" "id" 1}] {:fields #{"name"}})) "age")))
    (is (contains? (first (ene/-query st [{:type "user" "id" 1}] {:fields #{"age"}})) "age"))))

(deftest query-all
  (let [st (ejdbc/->JDBCStore DEFAULT-DB-SPEC {:entities {:user {"name" 'str "age" 'int}}})]
    (is (nil? (ene/-startup st)))
    (ene/-store st {"user" [{"name" "raoul" "age" 31}]})
    (ene/-store st {"user" [{"name" "john" "age" 30}]})
    (ene/-store st {"user" [{"name" "aaron" "age" 30}]})
    (is (= "aaron" (get-in (ene/-query-all st "user" {:sort [{:type :asc :field "name"}]}) [0 "name"])))
    (is (= "john" (get-in (ene/-query-all st "user" {:sort [{:type :asc :field "age"} {:type :desc :field "name"}]}) [0 "name"])))
    (is (not (contains? (first (ene/-query-all st "user" {:fields #{"name"}})) "age")))
    (is (contains? (first (ene/-query-all st "user" {:fields #{"age"}})) "age"))))

(deftest delete
  (let [st (ejdbc/->JDBCStore DEFAULT-DB-SPEC {:entities {:user {"name" 'str}}})]
    (is (nil? (ene/-startup st)))
    (let [{:strs [user]} (ene/-store st {"user" [{"name" "raoul"}]})]
      (ene/-delete st [{:type "user" :id (first user)}]))
    (is (empty? (ene/-query-all st "user" nil)))))