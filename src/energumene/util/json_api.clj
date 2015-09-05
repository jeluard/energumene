(ns energumene.util.json-api
  (:require [clojure.string :as string]))

(def mime-type "application/vnd.api+json")

{"blogs"
 #{"name"
   {"author"
    #{"lastname"}}}}

(defn field-
  [])


;/articles?include=author&fields[articles]=title,body,author&fields[people]=name
(defn generate-query-params
  [t m em]
  (str (string/join "," )))