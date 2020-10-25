
## Features
React - a reconciler - knows how to work with components
ReactDom - a renderer - knows how to take instructions and HTML
state - data in the system, that may change over time.
useState - used to make react update the HTMl on the page
Babel - a command line tool that can take any version of Javascript and spit out a newer version of it. Its included in every new install of a React project. This is required as a web browser where the project is executed may not support newer versions of Javascript. It consists of a huge number or npm packages.
Webpack - a bundler system. 

## Project Directories
/src - directory where we put all the source code.
/public - directory where we store all static files like images.
/node_modules - directory that contains all the projects dependencies.
package.json - records the projects dependencies and configures the project.
package-lock.json - records the exact version of the dependencies we install.

## Formatting
Components are in PascalCase

## Install
```
npx create-react-app exampleAppName
```
## Commands
```
// start the project
npm start
// stopping the project
Ctrl + c in the running terminal
```

### import vs require
- import is ES2015 Javascript Import statement, this is a modules system, that describes how code can be shared between files.
- require is CommonJS require statement, that does a similar thing, but uses a different modules system for sharing files.
```
// Every file inside the project is its own little universe, if want access to anything else around the project we need to import them.
import React from 'react'
- import - self named.
- React - a variable can be whatever we want to name it. 
- from - self named.
- 'react' - a directory in the node modules folder called exactly 'react'.
```

### what is a component?
A function or class that produces HTML for the user using JSX, and handles feedback from the user using event handlers.

### What is JSX
Babel.js/io is used to process JSX, no browser knows what JSX looks like, Babel changes JSX into normal Javascript code. 

#### JSX vs HTML
Adding custom styling / or a class to an element uses a different syntax than HTML, but JSX can reference Javascript. 

- If you are referencing a style like background-colour here you will need to remove the - and make it backgroundColour. This relates to any styles that have 'compound names' i.e. those with a dash.
- The outer brackets indicate that we are going to be referencing Javascript and the inner bracket indicates that backgroundColor: red is an object.
- JSX is supposed to use " not ' when you want to indicate a string. For non JSX the convention is to use ' quotes.

```
HTML = <div style="background-color: red"></div>
JSX = <div style {{ backgroundColor: red }}></div>
```

## Skeleton index.js

```
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <div>Hi There!</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));

```
