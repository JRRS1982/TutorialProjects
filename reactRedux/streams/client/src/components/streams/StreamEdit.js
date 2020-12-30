import React from 'react'
import _ from 'lodash';
import { connect } from "react-redux";
import { getStream, updateStream } from "../../actions";
import StreamForm from "./StreamForm";


class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id); // get this stream, so that it is available below
  }

  onSubmit = formValues => {
    this.props.updateStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm 
          onSubmit={this.onSubmit} 
          initialValues={_.pick(this.props.stream, 'title', 'description')} // initialValues is a magic method that in this case takes the promps.stream and passes the values of that (description and title) to the component it is set on - StreamForm, we use lodash here _ and pick function to narrow the selection to only those properties that we NEED to pass, for security and good practice reasons.
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }; // so state is where the list of streams is kept, ownProps is what is passed to this component, and therefore we can use the props (the id that is passed in via the url i.e. the params) and use that to return the stream with that id... to the stream property that is returned.
};

export default connect(mapStateToProps, { getStream, updateStream })(
  StreamEdit
);
