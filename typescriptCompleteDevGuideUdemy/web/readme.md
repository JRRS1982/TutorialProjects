# A Web Framework



## Commands run

```
"scripts": {
  "start:db": "json-server -w db.json", 
  "start:parcel": "parcel index.html",
  "start": "concurrently npm:start:*"
},
```
 
npm run start

## Requirements

- Class to represent a user and all of its data (name and age)
  - User needs to have ability to store some data, retrieve it and update it.
  - User needs to have ability to notify the app when data is changed.
  - User needs to be able to persist data to an outside server, and then retrieve it at some future point.
