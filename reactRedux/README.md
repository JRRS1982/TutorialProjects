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

### Functions / Event Handlers

If you apply these to a div/element and pass a callback function the callback function will be called.

- onClick -> callback for when a user clicks on something
- onChange -> callback for when text changes in an input
- onSubmit -> callback for when a user submits a form

```
// i.e. if there is a text input field, onChange will call onInputChange every time the text in the field changes... and in this case return the value of the event that happened... or do whatever you want.
onInputChange(event) { // some event callback
  return event.target.value;
}
<input type="text" onChange={this.onInputChange} />

```

## "Cannot read property state of undefined" - the most common error is React 'this'

"I can not access the property state on the value undefined" - undefined is a value in JS, what the error is saying is that 'this' has not been defined, and therefore it does not have an attribute called state, which is what we are trying to call.
```
this.state.example -> this is what we are probably wanting to do
undefined.state.example -> this is what we are actually doing

drive() { return this.sound; }
drive() // there is no parent for this to be called on so it will return above error.

We are basically calling 'this' where there is no element on the left, i.e. where there is no parent element that is 'this'.
```

### Axios

- fetch is a function that has been built into modern browsers, its does the job but is not great.
- axios is a package that can be installed which provides some helper methods which is more reliable and useful for projects.

When you make a request with axios it will return an object called a promise, which is like a callback with whatever data.

```
axios
  .get("https://api.unsplash.com/search/photos", {
    params: { query: searchTerm }, // what we are searching for
    headers: { // as per the unsplash docs... we need to include a header with auth.
      Authorization:
        "Client-ID cCd8B3JOJ4LOW1_V053RUWEXBDRijih_9mkP9vAmm74", // access key from unsplash
    },
  })
  .then((response) => { // we can use .then with anything that uses a promise... such as as axios, i.e. there will always be a then... its async so we may have to wait for the response, but when there is a response then... do xyz.
    console.log(response.data.results); // the objects that come back from unsplash
});
```

## Map function in javascript (reminder)

```
// just a quick reminder about the map function.
numbers =  [0,1,2];
numbers.map((num) => {
  return num * 10;
})
OR 
numbers.map((num) => num * 10); // slimline
numbers.map(num => num * 10); // super slimline
```

## key property on lists
On a list of elements we are required to add a 'key' for each element in the list so that React is able to work with it. The key should be unique, if it is not used an error will be thrown in console.
```
return <img key={image.id} src={image.urls.regular}>
```

## React Refs
- Gives access to a single dom element that is rendered by a component
- We create 'refs' in the constructor, assign them to instance variables, then pass to a particular JSX element as props.
1. define constructor
2. call a function from constructor to create a reference and assign it as an instance variable on our class.
3. we can setState on these, but it is not required to do so as they are not going to change. In general we only set state on things that are going to change over time.
```
// this is an example of how to create a reference called imageRef which is being created as an instance variable which we can therefore refer back to later in the class.
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }
```

## Hooks

Hooks are a way to write reusable code instead of a more classic technique such as inheritance.

All about giving function components more functionality. Function components can not make use of state or lifecycle methods, hooks are about changing that.

- useState -> a function that lets you use state in a functional component
- useEffect -> a function that lets you use something like lifecycle methods in a functional component
- useRef -> a function that lets you create a 'ref' in a function component

1. `useState` 
    - a hook that allows us to use state within a function component
    ```
    const [activeIndex, setActiveIndex] = useState(null);
    
    * useState is a primitive component from React, it returns two things, and
    * we are destructuring what it returns by creating activeIndex and setActiveIndex
    * variables here. activeIndex is the piece of state we are trying to track, the
    * second is a function that we are using to update state. useState(null) where
    * null is the initial value of the state.
    ```
2. `useReducer`
3. `useRef`
4. `useDebugValue`
5. `useEffect`
    - see widgets/src/components for a tonne of notes on this
    - is is "watching" what is in the second argument i.e [term] in the example above or [term, result.length] would be watching two things.
    - allows function components to use something similar to the lifecycle methods that are provided in class based components. See widgets/src/Search of this in use.
    - can configure useEffect hook to run some code automatically in one of three scenarios.
        1. When the component is rendered for the first time only 
        2. When the component is rendered for the 'first time and whenever it is re-rendered'.
        3. When the component is rendered for the 'first time' and 'whenever it is re-renders and some piece of data has changed'.
    - first argument to the function is what, the second argument is when.
        - when the first argument that is passed to useEffect is a function, all that we are allowed to return is another function. 
        - MASSIVE HEAD MESS - when the first argument to useEffect is a function it is called at the initial component render, and it returns a second function... but the second function is NOT invoked, it IS invoked when the component re-renders. It acts like a clean up function, it is invoked after the component is RE-rendered, so this second function runs BEFORE the first function at the components RE-render.... urgh! but cool.
    - when you use a piece of state in the useEffect function you need to included the props/pieces of state in the array of the second argument of function.
6. `useCallback`
7. `useImperativeHandle`
8. `useContext`
9. `useMemo`
10. `useLayoutEffect`
