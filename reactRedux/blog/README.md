# Title: Blog

This is a tutorial project from Steven Griders React-Redux 2020 course, it is a surprisingly complicated project that makes a call to jsonplaceholder.com to gather data and return that data to the page.

## Table of contents
* [Setup](#setup)
* [Technology and patterns used](#tech)
* [Tests and style](#tests)
* [Screenshots](#screenshots)
* [Reflection, credits and ideas](#reflection)

<div id='setup'>

## Setup

To run this project, install it locally using npm.

```
git clone https://github.com/JRRS1982/TutorialProjects/tree/master/reactRedux/blog
cd ./blog
npm install
npm start
```
Then the project will be available on `http://localhost:3000/`

<div id='tech'>

## Technology used

This project was created with:

* API's
        - https://jsonplaceholder.typicode.com/
* Frameworks 
        - none - React is a library
* Libraries
        - React
        - react-redux
        - redux-thunk
        - axios
        - lodash
* CI / CD?
        - none

### Coding pattterns used

n/a

<div id='tests'>

## Tests and style guide

n/a

<div id='screenshots'>

## Screenshots 

Please see the `./docs/images` file for screenshots.

<div id='reflection'>

## Reflection and ideas for future development

#### What did i learn?
- redux-thunk: applyMiddleware(thunk) used in the createStore function to allow us to return a function from action creators, they no longer have to `only` return an action. When we make an asyc call such as getting data from an api, we will always need to wait for a response and therefore use middleware like redux-thunk.
- Action creators - can return other action creators, so action creators can be nested, but the return from the nested action creator will still have to be dispatched even if it is dispatching the action, as when the sub action creator is called what it returns is a function.
- Lodash - seems pretty useful, but adds a dependency, so not too sure about it. Also additional learning that is required i.e. what functions are there / what use cases are there etc. 
- Dispatching actions, and having to dispact actions that have been dispatched, but internal to another action creator still need to be dispatched, this seems like its going to be the cause of a few future bugs! Its not clearly apparent that this is needed.
- getState() on redux thunk being passed a getState function, therefore providing state to internal functions is useful. ,
- fetchPostsAndUsers() function in actions is a massive complication, so much going on there, the async response on the internal action creator meaning the internal function needs both away and dispatch is tough.
- Reducers
        - switch statement within is a common pattern, to manage the different actions the reducer may be required to act on.
        - the first argument is the state of the component when it last rendered, the second is the action that.

#### What would i do differently?
- Personal time available recently to do this study has been short, would like more hours in the day to work on this.
- Again i have a tonnne of notes on this project, it is for my own personal use so not bothered as writing helps my comprehension of what it going on / forces me to take my time and learn what i am actually doing, but it could be tidier.

#### Credits
- Steven Grider, big up!
