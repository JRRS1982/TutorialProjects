import React from 'react'
import { connect } from "react-redux";
import { getStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.getStreams();
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
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

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) }; // turn object into an array
};

export default connect(mapStateToProps, { getStreams })(StreamList);
