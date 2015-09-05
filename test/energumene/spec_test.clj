(ns energumene.spec-test
  (:require [clojure.test :refer [deftest is testing use-fixtures]]
            [energumene.handler :as han]
            [energumene.store.jdbc :as ejdbc]
            [jdbc.core :as jdbc]
            [cheshire.core :as che]))

(def DEFAULT-DB-SPEC
  {:classname   "org.h2.Driver" ; must be in classpath
   :subprotocol "h2"
   :subname "mem:test"
   :user     "sa"
   :password ""
   :host "127.0.0.1"
   :DB_CLOSE_DELAY "-1"})

(defn ringify-request
  [req]
  (-> req
      (assoc :uri (clojure.string/replace-first (:uri req) #"\?.*" ""))
      (assoc :query-params (clojure.string/replace-first (:uri req) #".*\?" ""))
      (clojure.set/rename-keys {:method :request-method})))

(defmacro defring
  [name handler reqm respm init]
  `(clojure.test/deftest ~name
     (~init)
     (let [resp# (~handler (ringify-request ~reqm))
           b# (if-not (empty? (:body resp#)) (che/parse-string (:body resp#)) "")]
       (if-let [sm# (:status ~respm)]
         (is (= (:status resp#) sm#) "Status"))
       (if-let [hm# (:headers ~respm)]
         (is (= (:headers resp#) hm#) "Headers"))
       (if-let [bm# (:body ~respm)]
         (is (= b# bm#) "Body")))))

(defmacro defspec
  [name schema reqm respm v]
  `(let [m# ~schema
         st# (ejdbc/->JDBCStore DEFAULT-DB-SPEC m#)
         h# (han/handler st# m#)
         resp# ~respm
         reqm# ~reqm
         v# ~v
         init# (fn []
                 (energumene.core/-startup st#)
                 (if v#
                   (let [m# (energumene.core/-store st# ~v)]
                     (if (= :error (:type m#))
                       (throw (:cause m#))))))]
     (defring ~name h# reqm# resp# init#)))


(defmacro load-specs
  []
  `(do
     ~@(apply concat
         (for [[k m] (read-string (slurp (clojure.java.io/resource "specs.edn")))]
           (if (contains? m :specs)
             (for [[n s] (:specs m)
                   :let [n (symbol (str k " - " n))
                         sc (:schema m)
                         req (:request s)
                         resp (:response s)
                         init (:initial-entities m)]]
               `(defspec ~n ~sc ~req ~resp ~init))
             (let [s (:spec m)]
               `[(defspec ~(symbol k) (:schema ~m) (:request ~s) (:response ~s) (:initial-entities ~m))]))))))


(load-specs)

(defn clear-db
  [f]
  (f)
  (with-open [conn (jdbc/connection DEFAULT-DB-SPEC)]
    (jdbc/execute conn "DROP ALL OBJECTS")))

(use-fixtures :each clear-db)