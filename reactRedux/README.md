# Modern React with Redux 2020 Course

These are my notes and projects from [Stephen Grinders Course](https://www.udemy.com/course/react-redux/). I recommend / love all of his stuff. 

1. JSX
2. Components
3. Pics

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

### what are props?
Properties passed from a parent to child component, this can include other components being passed along as a property. Use props.children in the parent component to refer to/place where its child elements need to go. i.e. comment details is a property of ApprovalCard in components i.e. its contained in the wrapper of the large element that is ApprovalCard.

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

### Class Components
Benefits 
- easier code organization
- can use 'state' therefore easier to handle user input
- understands lifecycle events therefore easier to do things when the app first starts.

Requirements
- Must be a Javascript Class
- Must extend / be a subclass of React.Component
- Must define a render method that returns some amount of JSX

### Feature Components

## State in components
- only usable with class components (or when using hooks in feature components)
- you will confuse props with state
- State is a JS object that contains data relevant to a component
- Updating state on a component causes the component to almost instantly re-render
- State must be initialized when a component is first created
- State can only be updated with the function setState - you will forget this.


## Component Lifecycle Methods
During the life of a component these steps/functions will take place. It seems simple enough.

1. constructor
As per normal functions, classes need instantiating. This is a good place for one-time setup.
2. render
Will need to show the component, this is how it is done. Avoid doing anything apart from returning JSX in this function. Try and avoid adding conditional statements here, if we need to make helper methods to renderContent.
3. componentDidMount 
When render is called, this will also be called (once). This is a good place to do data loading.
4. componentDidUpdate
When setState is called, this will also be called. This is another good place to do data loading, when state/props change.
5. componentWillUnmount
Called if we remove the component. It is a good place to do cleanup, especially of non React stuff.

Others (less frequently used)
- shouldComponentUpdate
- getDerivedStateFromProps
- getSnapshotBeforeUpdate

### React Component Conventions
A component will typically be at the bottom of a file, with the config of the component at the top and helper functions in the middle. 

## How to get feedback from the user
pics project
## How to fetch data from an outside service or API
pics project
## How to show lists of records
pics project