# Title: Translate

This is a create-react-app project that explores the use of React Context, a single page which has field, and button components which will change from english to dutch language depending on the current state of the LanguageStore, which is updated by clicking on the flag on the page. 

Its all nested something like this

1. App
2. Language Store
3. Language Selector
4. Colour Context
3. UserCreate
    - Field
    - Button

## Table of contents
* [Setup](#setup)
* [Tech Stack](#tech)
* [Screenshots](#screenshots)
* [Reflection and credits](#reflection)

<div id='setup'>

## Setup

To run this project, install it locally using npm and in the root of the project:

```
npm install
npm start
```
Then the project will be available on localhost: 3000

<div id='tech'>

## Tech Stack

This project was created with:

- react 
- react-dom

And focused around the useage of Context, with the use of Provider and Consumer components.

<div id='screenshots'>

## Screenshots 

Please see the `./docs/images` file for screenshots.

<div id='reflection'>

## Reflection and ideas for future development

#### What did i learn?

All about Context in React, and Provider and Consumer. 

- Context object createContext is a vessel for holding a default value or value from the parent component, which is used by the Consumer of the nested child, or is available in this.context of the nested child component, i.e. passes props by a different name. 
- Provider and Consumer.
    - Consumer (see Button.js) is always passed one argument, that argument is a function and that function is automatically called with whatever value is currently in the 'pipe' aka what is given in the Provider. 
- .Consumer and .Providers are provided by the context system.

#### What would i do differently?

Not a great deal, good to known about this. Understand that context is not as good as Redux, so have learnt about this, and now know that it should be avoided.

#### Credits

Stephen Grider React 2020 course.
