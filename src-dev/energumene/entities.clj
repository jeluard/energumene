(ns energumene.entities
  (:require [energumene.core :as ene]))

(def user
  '{:energumene/expose-reverse-links #{:schema/blog}
    :energumene/access {}
    :energumene/jdbc {:options {:name "UNIQUE ID"} :types {:name "VARCHAR(21)"}}
    "name" str
    "email?" str
    })

(def blog                                                   ; BLOG
  (ene/revisioned
    '{"name" str
      "description?" str
      "visibility" (or :public :private)                       ; BLOG_VISIBILITY_ENUM for mapping
      ;:owner user                                            ; USER
      ;:authors #{user-ref+}
      }))

(def all
  {:user user :blog blog})

;;

{:jdbc/config {}
 :cors {:enable-foreign-origins true}
 :entities
 {"user"
  {:jdbc/config {:types {"name" "VARCHAR(64)"}}
   :constraints {"user" {:unique #{"name"}}}
   :schema
   {"name" 'str}}
  "blog"
  {:schema
   {"owner" :schema/user}}}}

{"blogs"
 #{"name"
   {"author"
    #{"lastname"}}}}

;
