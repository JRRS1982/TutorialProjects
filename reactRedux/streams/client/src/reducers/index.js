import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import streamReducer from "./streamReducer";
/**
 * the reducers folder i.e. index.js of reducers is imported by teh index.js file of the application itself, the combineReducers here is what is exported, therefore this is what is passed to that import in root index.js, which then uses this to create the state of the application.
 */
export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
});
