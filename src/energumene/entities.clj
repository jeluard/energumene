(ns energumene.entities)

; https://github.com/miner/herbert

(def all
  [{:type :user
    :version 1
    :schema {:id :string
             :email :string}}
   {:type :blog
    :version 1
    :schema
    {:id :string
     :version :int
     :name :string
     :description :string
     ;:visibility (s/enum :public :private)
     :domain :string
     :owner ::user ; or direct ref usage?
     :authors [::user]
     :metadata {:string :string}}}])

(def constraints
  {:user
    {:id "UNIQUE ID"
     :name "VARCHAR(32)"}})
