import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers'; // entire redux state object.

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

export class _App extends React.Component<AppProps> {  
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };
  
  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>;
    });
  }
  
  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch Todos</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] }  => {
  return { todos: state.todos };
};

// destructured version of above.
// const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
//   return { todos };
// };

export const App = connect(
  mapStateToProps,
  { fetchTodos }
)(_App);