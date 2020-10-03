import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers'; // entire redux state object.

interface AppProps {
  todos: Todo[];
  fetchTodos: Function; // we would like this to be a typeof fetchTodos - but we cant as redux thunk has some type errors with react therefore we have to set type as Function.
  deleteTodo: typeof deleteTodo;
}

interface AppState { 
  fetching: boolean;
}

export class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props); 
    this.state = { fetching: false }; // by default we are not fetching anything.
  }
  
  componentDidUpdate(prevProps: AppProps): void {  // will be called with the props that was passed to it previously
    if (!prevProps.todos.length && this.props.todos.length) { // we successfully fetched the todos (none in previous, but there are in state props.)
      this.setState({ fetching: false });
    }
  }
  
  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true});
  };
  
  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };
  
  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
          <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
            {todo.title}
          </div>
      );
    });
  }
  
  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch Todos</button>
        { this.state.fetching ? 'LOADING' : null }
        { this.renderList() }
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] }  => {
  return { todos: state.todos }; // long syntax
};

// destructed version of above.
// const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
//   return { todos };
// };

export const App = connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(_App);