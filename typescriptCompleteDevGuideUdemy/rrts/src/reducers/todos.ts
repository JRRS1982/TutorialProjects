import { Todo, Action, ActionTypes } from '../actions';

export const todosReducer = (
  state: Todo[] = [], // state will have an array of Todos passed to it, with a default of an empty array
  action: Action
  ) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload; // if the action is fetchTodos return the payload from the action we just fetched
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload); // remove the Todo with the appropriate id
    default:
      return state;
  }
};
