(ns energumene.util.schema)

(defn ref?
  [o]
  (and (keyword? o) (= "schema" (namespace o))))

(defn referencing
  [k]
  (name k))

(defn valid-type?
  [o]
  (or
    (#{'int 'str 'kw})
    (ref? o)))

'{str (or symbol (kw ":schema/.*"))}

; TODO replace with a schema
(defn relationships
  [m]
  (reduce (fn [v [e t]] (if (ref? t) (conj v e) v)) [] m)
  #_
  (reduce-kv #(if (ref? %3) (assoc %1 %2 %3) %1) {} m))

(defn validate
  [o]
  (cond
    (not (map? o)) (throw (ex-info "Not a map" {}))
    (not (every? string? (keys o))) (throw (ex-info "All keys must be string" {}))))

