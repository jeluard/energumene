(ns energumene.json-api)

(def mime-type "application/vnd.api+json")

; document
; data
; errors (array of error)
; meta (object)
; data and errors exclusives
; opt: jsonapi, links (object related to primary data), included (array of resources)
;      included iff data
;      links can contain: self, related, pagination links from primary data
; prim: an object, id (w/ type) or null; an array of resources, ids (w/ types) or empty
; resource must have id and type
; opt: attributes (obj), relationships (obj), links (obj) and meta (obj)

; GET /articles
; GET /articles/1
; GET /articles/1/author
; GET /articles/1/relationships/comments
; GET /articles/1/relationships/comments?include=comments.author,date
; GET /articles?include=author&fields[articles]=title,body&fields[people]=name
; GET /articles?sort=-created,title
; pagination?
; GET /comments?filter[post]=1,2&filter[author]=12 ; all comments for post 1 and 2 and author 12

; GET /blogs/1?include=user&fields[blog]=title,description,owner&fields[user]=name
{
  "data": [{
    "type": "blog",
    "id": "1",
    "attributes": {
      "title": "JSON API paints my bikeshed!",
      "description": "The shortest article. Ever."
    },
    "relationships": {
      "owner": {
        "data": {"id": 42, "type": "user"}
      }
    }
  }],
  "included": [
    {
      "type": "user",
      "id": 42,
      "attributes": {
        "name": "Julien"
      }
    }
  ]
}

; profile usage: http://jsonapi.org/extensions/
; http://discuss.jsonapi.org/t/long-running-jobs-or-asynchronous-processing/26
; http://discuss.jsonapi.org/t/how-to-implement-a-search-api/35/3
; http://flapjack.io/docs/1.0/jsonapi/#introduction
