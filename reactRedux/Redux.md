# Redux

A state management library - it attempts to manage the data of an application in an easier way.

## Redux Cycle

1. Action Creator
    - the only purpose it has is to create an action.
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
    - the name/type of what needs to take place
3. Dispatch
    - takes the actions and sends to reducers with data
4. Reducers
    - receive an action and data and process the data dependent on the action
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

```
5. State
    - central repository of all information
