import React from 'react'
import { connect } from 'react-redux';
import { createStream } from '../../actions/index';
import StreamForm from './StreamForm';


class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit}/> {/* passing a callback function to StreamForm onSubmit prop */}
      </div>
    );
  }
}


export default connect(
  null, 
  { createStream }
)(StreamCreate);
