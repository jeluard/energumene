(ns energumene.main
  (:gen-class)
  (:require [reloaded.repl :refer [system init start stop go reset]]))

(defn -main
  "Start a system passed as argument."
  [& args]
  (let [system (first args)]
    (reloaded.repl/set-init! system)
    (go)))
