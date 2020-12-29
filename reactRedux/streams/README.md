# Title: Streams

A React, Redux clone of [twitch.tv](https://www.twitch.tv/) (a video streaming service). Users are able to create, read, update and delete their own 'streams'. Users will login / logout and require correct authentication to modify a users streams. Errors will be handled. Forms will be handled in redux.

Read more [about the project.]('./docs/About.md)

## Table of contents
* [Setup](#setup)
* [Technology and patterns used](#tech)
* [Tests and style](#tests)
* [Screenshots](#screenshots)
* [Reflection, credits and ideas](#reflection)

<div id='setup'>

## Setup

To run this project, install it locally using npm.

1. `npm start` in api project
2. `npm start` in client project

```
git clone ...
cd ./...
npm install
npm start
```
Then the project will be available on... 

<div id='tech'>

## Technology used

This project was created with:

* Frameworks
* Libraries
    - react-router-dom (the core library of the react-router)
    - node-media-server ()
* API's
* CI / CD?
* Linting / style guide

### Coding pattterns used

I tried to follow the ... pattern.

<div id='tests'>

## Tests and style guide

The project has ESLint installed to ensure style constiency and Jest installed for testing purposes, run them with the following commands:

```
npm run test
npm run lint
```

Please find the tests in the `./tests` folder

<div id='screenshots'>

## Screenshots 

Please see the `./docs/images` file for screenshots.

<div id='reflection'>

## Reflection and ideas for future development

#### What did i learn?
- Navigation using <a> tags and href are bad as the old HTML and React/redux state you have will be dumped as the new HTML page is loaded. Use <Link> tag from react-router-dom import instead. This is where the Single Page App naming comes from, we are still using the same HTML, it is not refreshed, i.e. a single HTML page is used, but we hide and show components.
- react-router-dom, BrowserRouter usage.
- create-react-app build flow - a request to a url will check development resources in src, check the public directory and if not in any of that will return the index.html file.

#### What would i do differently?
- 

#### Credits

Stephen Grider, thanks!