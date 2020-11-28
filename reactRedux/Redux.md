# Redux

A state management library - it attempts to manage the data of an application in an easier way.

- react-redux is used in redux projects, and allows the integration of redux into react projects.
- axios - helps us make network requests.
- redux-thunk is a middleware, which helps make network requests from the redux side of the application.

## Installation of Redux

1. Install React `create-react-app <projectName>`
2. Install Redux and React-Redux `npm install --save redux react-redux`

## Redux Cycle

1. Action Creator
    - the only purpose it has is to create an action, to change the state of an application this is what we call, it creates an action.
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
    - the name/type of what needs to take place. i.e. the type of the return in the action creator.
3. Dispatch
    - is passed an action and sends to (all) the reducer with data. 

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
    - nb the first time a reducer is called it will have no value in 'oldListOfClaims', for the payload to be added to, so a default will need to be provided.
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
5. State
    - central repository of all information - after being updated waits until another change is required.

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