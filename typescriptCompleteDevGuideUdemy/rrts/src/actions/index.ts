import axios from 'axios';
import { ActionTypes } from './types';
import { Dispatch } from 'redux';

const url = 'https://jsonplaceholder.typicode.com/todos';

/*
response from the get request will be a todo
*/
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

/*
async action creator - will return a function
Not sure why dispatch fits in here, other than it is from React core, i think its the action creator, but directly from React.
*/
export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {  // call with some dispatch from redux, that allows us to discharge actions as we please.
    const response = await axios.get<Todo[]>(url)
    
    dispatch<FetchTodosAction>({ // when working on an action creator we can get overloaded with code, setting an interface on the dispatch clarifies what is happening / ensures what you pass in is correct.
      type: ActionTypes.fetchTodos,
      payload: response.data
    });
  }
};