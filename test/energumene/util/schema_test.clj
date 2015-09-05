(ns energumene.util.schema-test
  (:require [clojure.test :refer [deftest is]]
            [energumene.util.schema :as sch]))

(deftest validate
  (is (nil? (sch/validate {"a" 'int}))))

(deftest relationships
  (is (= ["user1" "user2"] (sch/relationships {"age" 'int "name" 'string "user1" :schema/people "user2" :schema/people})))
  (is (= [] (sch/relationships {"age" 'int "name" 'string}))))