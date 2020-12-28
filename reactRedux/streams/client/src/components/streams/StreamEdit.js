import React from 'react'
import { connect } from "react-redux";
import { getStream } from "../../actions";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id); // get this stream, so that it is available below
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return <div>{this.props.stream.title}</div>;
  }
}

/**
 * state as in the state from redux store, and ownProps as in the props that is passed to this component.
 */
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }; // so state is where the list of streams is kept, ownProps is what is passed to this component, and therefore we can use the props (the id that is passed in via the url i.e. the params) and use that to return the stream with that id... to the stream property that is returned.
};

export default connect(
  mapStateToProps, 
  { getStream }
)(StreamEdit);
