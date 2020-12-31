# Redux

A state management library - it helps manage state, in an easier way than can be done in plain React.

## Contents

- Installation
- Redux Dev Tools
- Redux Code Flow
- Middleware
    - redux-thunk
    - redux-form
- Useful reducer examples


## Installation of Redux

1. Install React `create-react-app <projectName>`
2. Install Redux and React-Redux `npm install --save redux react-redux`

## Packages (commonly used with redux)

- `react-redux` is used in redux projects, and allows the integration of redux into react projects.
- `redux-thunk` is a middleware, which helps make network requests from the redux side of the application.
- `redux-form` middleware to reduce the amout of code when working with forms.

---

## Redux Code Flow

1. `Action Creator` 
2. `Action`
3. `Dispatch`
4. `Reducer`
5. `State`

- Action Creator
    - An action creator `must` return an action object, it is its only purpose. To change the state of our state, this is what we call.
    - async can not be used in an action creator, as the response we get back (with the data that is assigned to the action and therefore reducer) will not be available for the reducer to act on. Something like redux-thunk (middleware) is used to manage this.
    - redux-thunk will allow you to return action objects and functions, without it, it is not possible.
```
const createPolicy  = (name, amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name,
    }
  };
};
```

2. Action
    - An action must have a `type` and `payload`, an action is the name/type of what needs to take place. i.e. what is returned in the action creator is:
        1. The Action you want to do (type) 
        2. The new state you want to provide to that action (payload)
3. Dispatch
    - is passed an action and sends to (all) the reducers with data. 

To use an action a component will need to have that action creator imported at the top and mapped to the component to make it available in state for its use by the component. The component will then be able to use that selectSong() function. If we do not do the import/export the action creator will not store.dispatch(selectSong()) it will just be a selectSong() and that will not update state via the reducer.
```
1. import { selectSong } from '../actions';

2. export default connect(mapStateToProps, {
  selectSong: selectSong,
})(SongList);

3. <button
     className="ui button primary"
     onClick={() => { this.props.selectSong(song)}}
     >Select
   </button>
```

4. Reducers
    - receive an action and data and transforms something / does the change we want.
    - must return something other than undefined
    - must produce 'state' or data, and use only the previous state and action that it is passed. 
    - must not 'reach out of iteself', to decide what value to return (it is pure / given the state/data + action it needs), should not make an API request, or reach out into the DOM make a DB request. We return a computation on the two object that it is given as parameters.
    - must not mutate the state it reutrns, it should create a new state. This is a soft rule, but if followed will save from an edge case. The [...state, action.payload] i.e. a 
    - nb the first time a reducer is called it will have no value in 'oldListOfClaims', for the payload to be added to, so a default will need to be provided.

`useful reducer examples`
- Removing an element from an array 
return state.filter(element => element !== 'whatYouWantToRemove')
- Adding an element to an array 
return [...state, 'whatYouWantToAdd']
- Replacing an element in an array 
return state.map(el => el === 'hi' ? 'bye' : el)
- Updating a property in an object
return {...state, name: 'Sam'}
- Adding a property to an object 
return {...state, age: 30}
- Remoing a property from an object
return {...state, age: undefined} OR via lodash library _.omit(state, 'age') which will create a new object without that property called age.

```
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM) { // if this reducer cares about this action type
    return [...oldListOfClaims, action.payload]; // create a new array with the items from oldListOfClaims and add the payload of the action (a 'claim' in this instance). It is important to create a new array here and not modify the existing by 'pushing' an item.
  }
  // if this reducer does not care about this action type
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amountOfMoneyToCollect;
  }
  return bagOfMoney;
}

// where a list of policies is a list of names of a person with a policy
const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY) {
    return [...oldListOfClaims, action.payload.name];
  } else if (action.type === "DELETE_POLICY) {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  return listOfPolicies;
}

```
5. State: 

Eventually the state of the application is updated! 

---

## Redux Dev Tools 

- A chrome extension, that is very useful in discovering state / what actions have been triggered: [Github Repo](https://github.com/zalmoxisus/redux-devtools-extension#usage)
- `INSTALL`: It is more than just adding a chrome extension, you need to add code to your application.

```
// in the root index.js, import compose and applyMiddleware, you will already be using createStore if you are working with Redux.
import { createStore, applyMiddleware, compose } from "redux";

// setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// apply
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware())
);

```
Once the installation is completed the chrome extension called redux dev tools, which you have added to chrome will light up (identify the web app you are on uses its middleware) and show the actions that take place and the state at a given time, and allow you to jump around the app to different state.

- `Debugging with redux dev tools`

Once setup, adding `localhost:3000?debug_session=<some_string>` (i.e. `?debug_session=123TestAThing`) in the browser url will trigger redux dev tools to start a debug session, which will auto save all data in redux store, which will persist across page refreshes, which is normally lost on page refresh - so you can see what action triggers the page to be reloaded.

---

## Redux Thunk

Middleware that allows action creators to return a function instead of an action object, and will call that function for you. Normally action creators are only able to return actions. 

`example here:` reactRedux/blog/src/actions/index.js

- If an action object is returned it must have a type. 
- If an action object gets returned, it can optionally have a payload. i.e. a payload is no longer essential.

### How it works:

1. Component gets rendered onto the screen
    - Components are generally responsible for fetching data they need by calling an action creator.
2. Component's `componentDidMount` lifecycle method gets called
3. We call `action creator` from componentDidMount
4. Action creator runs code to make an API request
    - Action creators are responsible for making API requests - this is where redux-thunk comes in. 
5. API responds with data
6. Action creator return an `action` with the fetched data on the `payload` property and a `type` i.e. name.
7. Some reducer will see the action and return the data off the payload. 
    - We get fetched data into a component by generating a new state in the redux store, then pushing that through to the component via the mapStateToProps function.
    - mapStateToProps is how Redux connects/sends data to React.
8. Because we generated a new state object, redux/react-redux will cause the React app to rerender


Middleware sits between the actions and reducers, a dispatch of the action will send the action to the middleware first, in the case of redux-thunk an object will be passed straight through to the reducers, but a function will be:

1. Invoked, and passed the `dispatch` and `getState` functions as arguments. 
2. Redux thunk is told to dispatch its internal action at its leisure (i.e. wait for a response then dispatch an action).

---
    - central repository of all information - after being updated waits until another change is required.



## Middleware

- A function that gets called with every action we dispatch
- Has the ability to stop or modify actions
- Most popular use of middleware is for dealing with async actions, using `redux-thunk`

Middleware sits between the action and reducers, when an action is `dispatch`ed it is sent to the midddleware (if there is any), and that middleware will do what it needs to do before passing it off to the the reducers.

Apply middleware to the redux store, with the applyMiddleware function:
```
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root') 
);
```



---

## combineReducers

Where we have different reducers we use the `combineReducers` function.
```
const ourDepartments = combineReducers({
  accounting: accounting, 
  claimsHistory: claimsHistory,
  policyOwnerNames: policies
});
```
What is on the left is what will be on the state, what is on the right is the name of the reducer

## createStore

When we have combined the reducers we can create a `store` object 
```
const store = createStore(ourDepartments);
```

## Store Object

That store object now has a number of functions available on it, that come from the reducers that it is made of and others. One of the reducers that was created is called createPolicy, it takes two arguments:

```
const action = createPolicy('Alex', 20);
```

## dispatch

action here is what is returned by the action creator, i.e. an action, that action has a type, that type (CREATE_POLICY) and data ('Alex', 20) is sent to all the reducers that are in the store. If the reducers need to do something with that action type they will.

```
store.dispatch(action)
```

---

## redux-form 

Middleware to remove some of the repetitive nature of building interactions between the component and the redux store i.e. mapStateToProps and action creators.

Docs are found here [redux-form.com](https://redux-form.com/8.3.0/) under examples you will find some excellent documentation. [Wizard Form](https://redux-form.com/8.3.0/examples/wizard/) is one of the common forms and is used widly. 

### Installation 

Import `reducer` from redux-form, and set it as `form` in the reducers index.js file i.e. where the other reducers are combined and saved to the store.

```
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  auth: authReducer,
  form: formReducer 
})
```
After this has been setup there will be a new key called form in the state of the application, which will contain the data that has been filled in on all the forms of the application.

Example of this in use at 
- streams/client/src/components/streams/StreamCreate.js

### Validating form entry

Dont forget to validate the contents of a form, to ensure it has at least some value, as the user probably doesnt want an empty field to be submitted. 

On initial render of a form (when using redux-form) and when it is interacted with a `validate` function is called with all of the data from that form. You will need to define that validate function with the error checks you wish to carry out, and you should can define it outside of the component.

See StreamCreate.js for an exampe of this (validate function) the validate function is created outside of the component and neeeds to be added to the connector / reduxForm function (i.e. at the bottom) so it is passed up.
