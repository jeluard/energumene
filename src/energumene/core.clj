(ns energumene.core)

(defprotocol Storage
  (-supports? [_]) ; pagination, filter, sort, batch
  (-startup  [_ m])
  (-store [_ s])
  (-query [ s]) ; support sparse fields, filtering, sorting
  (-update [_ s])
  ;(-replace [_ t id])
  (-delete [_ s]) ; by type, id
  (-shutdown [_ m]))

; Lucuma: Custom elements
; Hipo: DOM reconciliation
; Picada: Higher level Material components (Hipo+Lucuma)
; Energumene: HTTP based persistent resource server
; Kalos: Complete UI side (routing, offline, declarative UI) Can reconciliate Kagathos
; Kagathos: Complete backend (API and HTML, routing)

; Depending on Exporter? (like JSONAPI) Storage might need some specific schema constraints (like id as uuid, ..)
; on top of standard -supports? features

; https://tools.ietf.org/html/rfc6906
; http://trac.tools.ietf.org/html/rfc6839#section-3.1
; application/vnd.api+transit+json
; https://github.com/cognitect/transit-format

; register a schema definition for a type
; retrieve previous schema, if any
; diff both, if changes delegate to upgrade-startegy
; can downgrade

; schema
; custom type?
; restriction on string, map

; JSONAPI
; resource can be object (i.e. map) or array (i.e. list)

; JDBC
; support list and map


(defn start
  []
  #_
  (let [s (read {} :evolver nil)]
    (JSONAPI. s)))

(defprotocol Evolver
  (-evolve [_])) ; {:entity :field :from :to}

{:entity :user
 :version 1
 :schema {:id :string
          :email [:string]}}

{:entity :blog
 :version 1
 :schema {:id :string
          :owner :user}}

; Example from ReactEurope GraphQL
; GET /post/some-id
; => {post: {message: ""; timestamp: ...; authorId: 112233}}
; GET /user/112233
; => {user: {name: "Julien"; profile:{} }}
