(ns energumene.core)

(defprotocol Store
  (-startup  [_])
  (-store [_ s])
  (-query [_ s m]) ; support sparse fields, filtering, sorting
  (-query-all [_ s m])
  (-update [_ s])
  (-delete [_ s]) ; by type, id
  (-shutdown [_ m]))

(defn start
  []
  #_
  (let [s (read {} :evolver nil)]
    (JSONAPI. s)))

(defprotocol Evolver
  (-evolve [_])) ; {:entity :field :from :to}

(defn revisioned
  [m]
  (assoc m :energumene/revision 'str))

(defn revisioned?
  [m]
  (contains? m :energumene/revision))

(defn definition-only
  [m]
  (reduce-kv #(if (and (keyword? %2) (= "energumene" (namespace %2))) %1 (assoc %1 %2 %3)) {} m))

(defn entities
  [m]
  (reduce-kv #(assoc %1 %2 (definition-only %3)) {} (:entities m)))
