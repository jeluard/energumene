(ns energumene.core-test
  (:require [clojure.test :refer [deftest is]]
            [energumene.core :as ene]))

(deftest revisioned
  (is (true? (ene/revisioned? (ene/revisioned {})))))

(deftest entities
  (is (empty? (ene/entities {})))
  (is (empty? (:entity (ene/entities {:entities {:entity {:energumene/aa ""}}}))))
  (is (contains? (:entity (ene/entities {:entities {:entity {:energumene/aa "" :a ""}}})) :a))
  (is (contains? (:entity (ene/entities {:entities {:entity {:energumene/aa "" "a" ""}}})) "a")))