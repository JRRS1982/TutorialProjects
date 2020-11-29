import jsonPlaceholder from "../apis/jsonPlaceholder";

/**
 * Bad code below - action creators must not make async calls
 * - babel will transpile our code into ES2015 code, the async - await code, will transpile into a large block of code, the first return from that block of code is the function itself, not actually what is returned from the function, so an asyn function can not be used.
 * 
 */
// export const fetchPosts = async () => {
//   const response = await jsonPlaceholder.get("/posts");

//   return {
//     type: "FETCH_POSTS",
//     payload: response,
//   };
// };

/** redux-thunk allows this action creator to return this function, an action creator would not be able to return a function without it. It also calls the function outside of the immediate execution.
 * 
 * the REDUX-THUNK function takes `dispatch` and `getState` functions, this is how redux thunk works, getState will read any information that we want to read and dispatch will change any piece of state that we want to change. 
 * 
 * dispatch function here will manually dispatch a function, at a time that we want it to be dispatched, instead of all the time. 
 * 
 * This is an example of an async function, 
 */
export const fetchPosts = () => {
  return async (dispatch) => { // dispatch and getState are parameters that CAN be used in the internal function, but we dont need getState in this instance.
    const response = await jsonPlaceholder.get("/posts"); // wait on response to this get request
    dispatch({ type: 'FETCH_POSTS', payload: response.data }) // dispatch/send that this action to the reducers with the response to the get request when we get that response.
  };
};

// can be ES2016 shortened to:
// export const fetchPosts = () => async dispatch => {
//   const response = await jsonPlaceholder.get('/posts');
//   dispatch({ type: 'FETCH_POSTS', payload: response});
// }