import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { getStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";


class StreamDelete extends React.Component {
  componentDidMount() {
    getStream(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <Link to="/" className="ui button">
          Cancel
        </Link>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  /**
   * handle the initial state - the component will be rendered, and only then will componentDidMount be called, so the stream will not be available straight away
   */
  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    } 
    return `Are you sure you want to delete the stream called: ${this.props.stream.title}`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

/**
 * we need to delete a specific stream, so we are using a class based component to enable us to be able to use lifecycle methods, such as componentDidMount above, which will make a request to get the id of the stream from the url. Without that we dont have the id/details of what the stream is we are making a request about available in this component. So once that has been called we need to link the properties of this component to state. So we use connect to connect react with redux and setting the stream in this component as that from state using the prop as a reference. 
 * 
 * Important to remember that the component will be rendered and then the componentDidMount method will be called, so it is not immediate, and the initial state may be empty, which is why renderContent is required. 
 */
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { getStream, deleteStream })(
  StreamDelete
);
