import React from 'react'
import { connect } from 'react-redux';
import { createStream } from '../../actions/index';
import StreamForm from './StreamForm';

/**
 * Field being a component that we are going to display on the page and redux-from being just like the connect function.. as that is what it is really replacing.
 */
class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit}/> {/* passing a callback function to StreamForm which will render the form */}
      </div>
    );
  }
}

/**
 * we are wrapping the reudxForm (formWrapped) in the connect function, kind of nesting these exports so that both the reduxForm and connect function are exported
 */
export default connect(
  null, 
  {createStream}
)(StreamCreate);