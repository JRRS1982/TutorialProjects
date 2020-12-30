# Title: Client

This is the main body of the code for the larger streams project, it deals with `CRUD` actions of a stream with `Authenticaion` of a user. It manages state with redux and `Restful` routing. It has a `Modal` and layout seperation.

## Table of contents

* [Setup](#setup)
* [Technology](#tech)
* [Screenshots](#screenshots)
* [Reflection, credits](#reflection)

<div id='setup'>

## Setup

To run this project, navigate to the root of the client folder, then:

```
npm install
npm start
```
Then the project will be available on localhost port 3000.

<div id='tech'>

## Technology

This project was created with:

- `axios` a Javascript library used to make HTTP requests
- `google api` Using "https://apis.google.com/js/api.js" in the header of index.html and have created a GoogleAuth component to create authorisation with Auth0 via a Google api
- `flv.js` a node media player panel
- `lodash` a Javascript helper
- `react` a Javascript library
- `react-dom` a package for react that provides DOM specific methods
- `react-redux` a package to bind React to redux, allows React to read from a Redux store
- `react-router-dom` a package that contains DOM bindings for React Router, `Router` to bind routes in the app, and create a history `Route` to create a route and `Switch` to limit wildcard routes
- `react-scripts` create-react-app boilerplate to allow npm start
- `redux` a Javascript library that helps to manage the applications state
- `redux-form` package to help manage data in a React form, reduce typing by storing data in redux.
- `redux-thunk` React middleware that allows you to call an action creator that returns a function, instead of an action object.
- `web-vitals` create-react-app boiler plate that measures user experience - unused.

<div id='screenshots'>

## Screenshots 

Please see the `./docs/images` file for screenshots.

<div id='reflection'>

## Reflection and ideas for future development

#### What did i learn?

Where do i start?! Learnt a tonne from this project, have learnt about Routing in a React application, and how Switch probably should be used to negate wildcards. Router history is required, and comes from react-browser-dom, there is a tonne of functionality that i am not sure about yet. 

Feeling ok about the whole action creators, actions, reducers, components, but still need to learn more about how they tie together, or rather how React and redux tie together, state and props, seems like it would get really complex.

Enjoyed the work on a modal, as learnt how that needed to be portaled out of the dom tree and attached in the index.html file at root so the z-index was not interfered with. 

Google Auth - great to get that working! A fully working auth 0 system in a personal project like this is great! Will be using that again in the future. 

Forms - Fields for redux-form also looks useful, removing the need to create reducers and the flow for all fields, keeping things DRY, will probably need to return to that again later too.

#### What would i do differently?

- Nrot a lot, was a good project. I enjoyed it and it went pretty well.

#### Credits

- Stephen Grider, React 2020 course.
