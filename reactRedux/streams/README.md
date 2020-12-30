# Title: Streams

A React, Redux clone of [twitch.tv](https://www.twitch.tv/), a video streaming service. 

Users are able to create, read, update and delete their own 'streams'. Users will login / logout and require correct authentication to modify a users streams. Errors will be handled. Forms will be handled in redux.

Read more [about the project.]('./docs/About.md)

## Table of contents
* [Setup](#setup)
* [Technology and patterns used](#tech)
* [Tests and style](#tests)
* [Screenshots](#screenshots)
* [Reflection, credits and ideas](#reflection)

<div id='setup'>

## Setup

To run this project, install it locally using npm, it requires the three projects to be running, see their readmes for more details.

1. streams/api
2. streams/client
3. streams/rtmpserver 

Once these are running the client project will be the main UI and available on local host 3000.

<div id='tech'>

## Technology used

Please see each project above for details about the tech used in each, client is the main project.

<div id='screenshots'>

## Screenshots 

Please see the `./docs/images` file for screenshots of each project in use, particularly clietn project which has architecture image.

Please see `./docs/About.md` file for more info about the project in whole, 

<div id='reflection'>

## Reflection and ideas for future development

#### What did i learn?

- Navigation using <a> tags and href are bad as the old HTML and React/redux state you have will be dumped as the new HTML page is loaded. Use <Link> tag from react-router-dom import instead. This is where the Single Page App naming comes from, we are still using the same HTML, it is not refreshed, i.e. a single HTML page is used, but we hide and show components.
- react-router-dom, BrowserRouter usage.
- create-react-app build flow - a request to a url will check development resources in src, check the public directory and if not in any of that will return the index.html file.
- more reflections in each project readme.

#### What would i do differently?

- React is really complicated and there is a tonne that i am interested in learning more about. Feeling after all that this is done, that there is always going to be more to learn, and i need to focus on making things rather than focus on learning, getting out of the tutorial purgatory is important, but getting to the stage where you are comfortable / still happy and enjoying what you are doing is also important. 
- Note taking goes out the window when you start refactoring, which is why leaving comments all over the place is bad practice, but it feels good, for my own reflection and rubber ducking of what is actually happening in the project. In production code i need to make the code tidier, in this tutorial i think that it is ok to probably have some comments that are out of date and no longer relevant... but that frustrates me so i would like to remove one day.

#### Future development

- There are tonnes of rough notes still in this project, im taking the leave it in there approach in this project as I may come back to get some implementation from the project in the future, but its not production code, but would like to tidy up at some point... maybe.

#### Credits

Stephen Grider, thanks!