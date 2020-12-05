import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

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

/**
 * below is an async function that uses the new syntax to get an individual user and dispatch the required action with a payload from the response. Basically its how you async get data.
 * 
 * see ./Lodash for details about memoize, what we are doing here is removing the request to get the user id for all users, and limiting it to only happen once per user. memoize is saying if i am called, i will return what you want, but if you call me again i will return what i returned first time, i aint gonna do the work again. So the dispatch is only going to get called once when fetchUser(xyz) is called
 * 
 *  fetchUser(1) is called, that calls the dispatch function, which returns the _fetchUser(1, dispatch) function, that makes a request and dispatches an action. The page will re-render as FETCH_USER is going to change state, the function is then called again when state is changed, which WILL NOT make another call as it has been momozied with lodash to remember what is returned the first time (and not do the internals). If the user data changes then the secodn time round the response may not be up to date.
 */
// MEMOIZED VERSION
// export const fetchUser = (id) => dispatch => {
//   _fetchUser(id, dispatch);
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
  
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });

// export const fetchUser = (id) => dispatch => {
//   _fetchUser(id, dispatch);
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
  
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH)_USER", payload: response.data });
};

/**
 * - async dispatch as we are using redux thunk (this is async)
 * - dispatch(fetchPosts()); as we need to pass what is returned from the fetchPosts() function to the dispatch function, which is really confusing as dispatch is called inside the fetchPosts function, but that is not what is returned by fetchPosts, its an async function! So we actually need to invoke the fetchPosts function and send what is returned from that to the dispatch.
 *
 * Basically WE ARE CALLING AN ACTION CREATOR FROM WITHIN AN ACTION CREATOR, AND THEREFORE WE NEED TO DISPATCH WHAT IS RETURNED FROM THE INNER ACTION CREATOR.
 *
 * ON TOP OF THAT THE INNNER ACTION CREATOR IS ASYNC, SO THE INNER ACTION CREATOR NEEDS TO HAVE AN ASYNC TAG ADDED
 *
 * getState is the second function that redux-thunk uses, i.e. its going to be providing you state so that you can use it within the function, in this case we are invoking that function and collecting posts from the global state.
 *
 * _.map() is a lodash function that is provided posts from the redux-thunk function, and mapping out the 'userId' property from each post.
 *
 * _uniq() is getting only the unique userIds from the posts in state.
 *
 * then we loop over the userIds array, and dispatch the fetchUser action creator action with the id of each user in state. So we are dispatching the fetch_user action once for each unique user that is in the state.posts.
 */

// UUUURRRGGGHHHH!! 
// export const fetchPostsAndUsers = () => async (dispatch, getState) => {
//   await dispatch(fetchPosts());
//   const userIds = _.uniq(_.map(getState().posts, "userId"));
//   userIds.forEach((id) => dispatch(fetchUser(id)));
// };

/**
 * this is the same as the above, but using lodash to make it look better
 */
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value(); // to execute these steps
};