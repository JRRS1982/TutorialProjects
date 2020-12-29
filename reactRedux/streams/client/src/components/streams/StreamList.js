import React from 'react'
import { connect } from "react-redux";
import { getStreams } from "../../actions";
import { Link } from "react-router-dom";


class StreamList extends React.Component {
  componentDidMount() {
    this.props.getStreams();
  }

  /**
   * a helper function to 
   */
  renderAdmin(stream) {
    if (stream.googleUserId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link 
            className="ui button negative" 
            to={`/streams/delete/${stream.id}`}>
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)} {/*render admin has to be shown before the i tag for semantic ui to work*/}
          <i className="large middle aligned icon camera"></i>
          <div className="content">
            {stream.title}
            <div className="description">
              {stream.description}
            </div>
          </div>
        </div> 
      )
    })
  }

  renderCreate(state) {
    if (this.props.isSignedIn !== null) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.renderList()}
          {this.renderCreate()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    streams: Object.values(state.streams),  // turn object into an array
    currentUserId: state.auth.googleUserId,
    isSignedIn: state.auth.isSignedIn
  }; 
};

export default connect(mapStateToProps, { getStreams })(StreamList);
