# API

Acting as a database. 

The only customisation of this has been to add the start command to the package.json.

```
// so start up json-server on port 3001, and watch the db.json file for any changes to it. 
"start": "json-server -p 3001 -w db.json"
```

So when you run `npm start` in the project you will have a resource at `localhost:3001/streams`, if you want to create, read, update or delete elements you can do that with restful requests to this endpoint. 

ACTION -> METHOD -> ROUTE -> RESPONSE
List all -> GET -> /streams -> array of records 
List one -> GET -> /streams/:id -> single record
Create -> POST -> /streams -> single record
Update -> PUT -> /streams/:id -> single record
Delete -> DELETE -> /streams/:id -> nothing
