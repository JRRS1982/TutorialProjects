# A Web Framework

[A web framework project](https://www.udemy.com/course/typescript-the-complete-developers-guide/learn/lecture/15066880#overview) on udemy - a really great course. 

## Commands run

npm install
npm start

```
"scripts": {
  "start:db": "json-server -w db.json", 
  "start:parcel": "parcel index.html",
  "start": "concurrently npm:start:*"
},
```

## Requirements

- Class to represent a user and all of its data (name and age)
  - User needs to have ability to store some data, retrieve it and update it.
  - User needs to have ability to notify the app when data is changed.
  - User needs to be able to persist data to an outside server, and then retrieve it at some future point.


## What i learnt

I learnt a tonne from this course, 7 hours alleged, probably 14 hours spent twiddling with things. Learnt a lot about the interaction between classes, and how delegation can happen between classes, a lot of breaking classes into composition style elements.

- UserEdit rendering both the UserForm and UserList views. 
- Having View extend the Model as why not, all the views need to have Model.
- Binding events to an eventsMap that holds a list of things that should happen.
- Triggering those events with the 'change' event to re-render the HTML
- Attributes.get ...wow... using the keys of a generic type.
- Model.on / get ... being passed through from events and attributes as Mode a generic type, therefore not needing to call Model.events.on, can Model.on - so much good code.

So much going on in this project. May be worth doing this again at some point!