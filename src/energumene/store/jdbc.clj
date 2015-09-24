(ns energumene.store.jdbc
  (:require [clojure.string :as string]
            [energumene.core :as core]
            [energumene.util.schema :as sch]
            [jdbc.core :as jdbc]
            [jdbc.proto :as jdbct])
  (:import (clojure.lang Keyword)
           (java.sql PreparedStatement)))


; https://github.com/mbuczko/boot-flyway

; Enum (of string, num, kw). all same types
; RESOURCE_PROPERTY_ENUM e.g. BLOG_VISIBILITY_ENUM
; ID   NAME
; UPGRADE enum values
; if less enum than before, old out-of-range enum set to null
; keep track of old values, find new positions in new values, update associated indices
; e.g. :v (or :public :private) => :v (or :protected :private :pub)
; user can specify update scheme (:public :pub)

; SET: array with proc calls (ADD_SET) (REMOVE_SET) (CLEAR_SET)
; jsonapi: array: set but with index, sorted on read
; MAP:

; Expect SQL:2003 support (REFERENCES, INTEGER, CHARACTER VARYING())

; MULTISET
; MEMBER OF, UNION, INTERSECT, EXCEPT

; Create a ustom type?
; create or replace type num_tab_typ as table of number;
; create table num_tab (num num_tab_typ)
; nested table num store as num_tab_store;


; POSTGRE proedure
; http://technobytz.com/sql-trigger-example-in-postgresql.html
; http://www.the-art-of-web.com/sql/trigger-update-timestamp/
; http://stackoverflow.com/questions/25271883/postgresql-update-trigger

(defprotocol SQLMapper
  (-type [_])
  (-to-sql [_ o])
  (-from-sql [_ o]))

#_
(extend-type Keyword
  )

(deftype KeywordSQLMapper
  []
  SQLMapper
  (-type [_] "CHARACTER VARYING(32)")
  (-to-sql [_ o] (if-let [ns (namespace o)] (str ns "/" (name o)) (name o)))
  (-from-sql [_ o] (keyword o)))

(deftype StringSQLMapper
  []
  SQLMapper
  (-type [_] "CHARACTER VARYING(32)")
  (-to-sql [_ o] o)
  (-from-sql [_ o] o))

(defmulti default-ddl-type identity)

(defmethod default-ddl-type 'str [o] (-type (StringSQLMapper.)) #_"CHARACTER VARYING(32)")
(defmethod default-ddl-type 'int [o] "INTEGER")
(defmethod default-ddl-type 'smallint [o] "SMALLINT")
#_(defmethod default-ddl-type 'num [o] "")

(defn enum?
  [o]
  (and (list? o) (= 'or (first o))))

(def ^:private ref-type "CHARACTER VARYING(32)")

(defn table-name
  [s]
  (string/upper-case s))

(defn column-name-from-type
  [s]
  (string/replace-first (string/upper-case s) "?" ""))

(defn enum-table-name
  [t f]
  (table-name (str t "_" (column-name-from-type f) "_enum")))

(defn ddl-type
  [t f v]
  (cond
    (string? v) v
    (symbol? v) (default-ddl-type v)
    (enum? v) (str ref-type " REFERENCES " (enum-table-name t f) "(ID) ON UPDATE SET NULL ON DELETE SET NULL")
    (sch/ref? v) "INTEGER"))

(defn column
  [s]
  (let [n (column-name-from-type s)]
    {:name n
     :optional? (not= (count n) (count s))}))

(defn create-table-sql
  [t m]
  (assert (string? t))
  (assert (map? m))
  (format "CREATE TABLE %s (%s)"
          (table-name t)
          (string/join ", " (for [[k v] m
                                  :let [{:keys [name optional?]} (column k)
                                        d (ddl-type t name v)]]
                              (if d
                                (str name " " d (if (and (not optional?) (symbol? v)) " NOT NULL"))
                                (throw (ex-info (format "Could not infer type for field <%s>" name) {:table t :field name})))))))

(defn no-kw
  [m]
  (reduce-kv #(assoc %1 (name %2) %3) {} m))

(defn fetch
  [conn q]
  (try
    ; TODO column as string, not kw
    (into [] (map no-kw) (jdbc/fetch conn q))
    (catch Exception e
      {:error (.toString e)})))

(defn drop-table-sql
  [t b]
  (str "DROP TABLE " (table-name t) (if b " IF EXISTS ") ";" ))

(defn drop-table
  [conn t b]
  (jdbc/execute conn (drop-table-sql t b)))

(defn drop-sequence-sql
  [t b]
  (str "DROP SEQUENCE " (table-name t) (if b " IF EXISTS ") ";" ))

(defn drop-sequence
  [conn t b]
  (jdbc/execute conn (drop-sequence-sql t b)))

(defn id-seq-name
  [t]
  (str (string/upper-case t) "_ID_SEQ"))

(defn type-of
  [o]
  (cond
    (vector? o) :vector
    (map? o) :map
    (enum? o) :enum
    (list? o) (throw (ex-info "Unknow form" {:type o}))
    (symbol? o) :symbol
    :else :literal))

(defn create-enum-table
  [t f]
  (create-table-sql (enum-table-name t f) {"id" 'smallint "value" 'str}))

(defn as-column-ref
  [m]
  (into {} (map (fn [o] [(str (name (key o)) "-ref") (val o)]) m)))

(defn create-table-id-seq
  [t]
  (str "CREATE SEQUENCE " (id-seq-name t) ";"))

(defn id-type
  [t]
  (str "INT DEFAULT " (id-seq-name t) ".NEXTVAL PRIMARY KEY"))

(defn create-tables-from-schema
  [t m]
  (let [gm (group-by (fn [[_ v]] (type-of v)) (seq m))]
    ; TODO fix
    (flatten
      (list
        ; First create all mapping table as they will be referenced in the main table
        (let [lv (:enum gm)]
          (for [[k _] lv]
            (create-enum-table t (name k))))
        (create-table-id-seq t)
        (create-table-sql t (assoc m "id" (id-type t)))))))

(defn fields
  [m]
  (if-let [v (:fields m)]
    (string/join ", " (map name v))
    "*"))

(defn select
  [conn t m]
  (fetch conn [(str "SELECT " (fields m) " FROM " (:type t) " WHERE ID=?") (get t "id")]))

(defn order
  [m]
  (if-let [v (:sort m)]
    (str "ORDER BY " (string/join ", " (map (fn [m] (str (name (:field m)) " " (name (:type m)))) v)))))

(defn select-all
  [conn t m]
  (fetch conn (str "SELECT " (fields m) " FROM " t " " (order m) ";") #_" LIMIT 1 OFFSET 3;"))

(defn insert-sql
  [t v]
  (str "INSERT INTO " t " ( "
       (string/join ", " v)
       " ) VALUES ( "
       (string/join ", " (repeat (count v) "?"))
       " )"))

(defn values
  [m]
  (into [] (map #(if (map? %) (get % "id") %)) (vals m)))

(defn insert!
  [conn t v]
  (assert (string? t))
  (assert (vector? v))
  (assert (= 1 (count v)) "only 1 element per type is supported for now")
  (let [m (first v)]
    (jdbc/execute conn (into [(insert-sql t (keys m))] (values m)))
    (let [o (jdbc/fetch conn (str "SELECT " (id-seq-name t) ".CURRVAL;"))]
      ; TODO replace with getGeneratedKeys
      [(val (ffirst o))])))

(defn insert-enum!
  [conn t m]
  (assert (string? t))
  (assert (some? m))
  (jdbc/execute conn (into [(insert-sql t (keys m))] (vals m))))

(defn delete-by-id-sql
  [t id]
  [(str "DELETE FROM " t " WHERE ID=?") id])

(defn delete-by-id!
  [conn t id]
  (assert (not (nil? t)))
  (assert (not (nil? id)))
  (pos? (jdbc/execute conn (delete-by-id-sql t id))))

(defn create-tables-from-entities
  [v]
  (apply concat
         (for [[e m] v]
           (create-tables-from-schema (name e) m))))

(defn database
  [conn]
  (keyword (string/lower-case (.getDatabaseProductName (jdbct/get-database-metadata conn)))))

(defrecord JDBCStore [db conf]
  core/Store
  (-startup [_]
    (with-open [conn (jdbc/connection db)]
      (let [entv (core/entities conf)]
        (jdbc/atomic conn
        (doseq [s (create-tables-from-entities entv)]
          (println s)
          (jdbc/execute conn s)))
        #_
        (doseq [[kw m] (:entities conf)]
          (doseq [f (filter #(enum? (val %)) (seq m))]
            (let [[k v] f
                  enums (map-indexed (fn [i o] {"id" i "value" (name o)}) (drop 1 v))]
              (doseq [enum enums]
                (insert-enum! conn (enum-table-name (name kw) (name k)) enum))))))))
  (-query [_ r m]
    (with-open [conn (jdbc/connection db)]
      (try
        (select conn (first r) m)
        (catch Exception e
          {:type :error :value [{:detail (.toString e)}]}))))
  (-query-all [_ r m]
    (with-open [conn (jdbc/connection db)]
      (select-all conn r m)))
  (-store [_ m]
    (with-open [conn (jdbc/connection db)]
      (try
        ; TODO batch multiple inserts to same table
        ; H2 JDBC drivers does not allow to retrieve generated keys when using executeBatch
        ; https://groups.google.com/forum/#!searchin/h2-database/getGeneratedKeys/h2-database/rKvdHNtdnv4/mxO6SGtqszcJ
          (jdbc/atomic conn
            (into {} (map (fn [[e m]] [e (insert! conn e m)])) m))
        (catch Exception e
          (.printStackTrace e)
          {:type :error :cause (.toString e)}))))
  (-delete [_ s]
    (with-open [conn (jdbc/connection db)]
      (jdbc/atomic conn
        (into [] (map #(delete-by-id! conn (:type %) (:id %))) s)))))
