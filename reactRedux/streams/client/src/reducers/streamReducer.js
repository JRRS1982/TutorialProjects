import _ from "lodash";
import {
  CREATE_STREAM,
  GET_STREAM,
  GET_STREAMS,
  UPDATE_STREAM,
  DELETE_STREAM,
} from "../actions/types";

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_STREAM:
      // will get the id of the action.payload and create a key for it in the new state object, with the value of action.payload
      return { ...state, [action.payload.id]: action.payload };
    case GET_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") }; // use the id of each stream as the key in a new mapped object of streams
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload); // use lodash to omit/remove the payload i.e. id of the action we want to delete from the state.
    default:
      return state;
  }
};

export default streamReducer;
