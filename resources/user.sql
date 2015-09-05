id: String unique
version: INT
given-name: String
family-name: String
email: String
role: role id or keyword
avatar: avatar id
login: login id (multiple?)
metadata: kv pair
billing-frequency: billing frequency id (:monthly, semi-annually or :annually)


curl -XPOST \
  localhost:3000/blogs \
  -H Content-Type:application/vnd.api+json \
  -d '
  {
    "data": {
      "type": "blog",
      "attributes": {
        "id": "my-blog",
        "name": "Some blog"
        "visibility": "public"
      }
    }
  }'; echo
