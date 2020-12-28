import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  GET_STREAM,
  GET_STREAMS,
  UPDATE_STREAM,
  DELETE_STREAM,
} from "./types";
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
 * THIS IS AN AXIOS REQUEST, WHERE WE POST ALL THE DATA THAT WILL BE FORMVALUES to this endpoint, this is the start of creating a stream. After making the post request we get a resposne back with success criteria etc. 
 */
export const createStream = formValues => async (dispatch, getState) => {
  const { googleUserId } = getState().auth;
  const response = await streams.post("/streams", {...formValues, googleUserId }); 
  dispatch({ type: CREATE_STREAM, payload: response.data });// action creator here, with a type and a payload... the response from the post request
  // programmatic navigation to send user back to streams, if the create stream request is successful.
  
};

export const getStreams = () => async dispatch => {
  const response = await streams.get('/streams');
  dispatch({ type: GET_STREAMS, payload: response.data });
}

export const getStream = (id) => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: GET_STREAM, payload: response.data });
} 

export const updateStreams = (id, formValues) => async dispatch => {
  const response = await streams.put(`/streams/${id}`, formValues); // formValues = what we want to update.
  dispatch({ type: UPDATE_STREAM, payload: response.data });
}

export const deleteStream = (id) => async dispatch => {
  await streams.delete(`/sreams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id }); // there is no response on delete, so we are using id of the stream for the reducer.
}