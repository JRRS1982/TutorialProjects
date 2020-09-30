import { ActionTypes } from './../actions/types';
import { Todo, FetchTodosAction } from '../actions';


export const todosReducer = (
  state: Todo[] = [], // state is a default of array of Todo, with a default of an empty array
  action: FetchTodosAction
  ) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload; // if the action is fetchTodos return the payload from the action we just fetchedd
    default: 
      return state;
  }
};
