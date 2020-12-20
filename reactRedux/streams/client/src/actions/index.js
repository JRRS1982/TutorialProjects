import { SIGN_IN, SIGN_OUT } from './types';
import streams from '../apis/streams';


export const signIn = (googleUserId) => {
  return {
    type: SIGN_IN,
    payload: googleUserId
  };
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
}


/**
 * REDUX THUNK, long version of the syntax
 * 
 * export const createStream = (formValues) => {
 *  return (dispatch) => {
 *  }
 * };
 * 
 * THIS IS AN AXIOS REQUEST, WHERE WE POST ALL THE DATA THAT WILL BE FORMVALUES
 */
export const createStream = formValues => async dispatch => {
  streams.post('/streams', formValues);
};
