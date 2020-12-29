import React from 'react'
import flv from 'flv.js'; // the flash player package from npm
import { connect } from "react-redux";
import { getStream } from "../../actions";



class StreamShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params.id;
    this.props.getStream(id);     
    this.buildPlayer();
  }

  componentDidUpdate() { // called when the component is updated... therefore building the player for the component, in case there was no stream id in the first render. Or if there are any other re-renders.
    this.buildPlayer();
  }

  buildPlayer() {
    const { id } = this.props.match.params.id;
    if(this.player || !this.props.stream) {
      return;
    }
    /**
     * https://github.com/illuspas/Node-Media-Server#via-flvjs-over-http-flv has example code for setting up flv.... 
     * 
     * we have added this functionality to this method to not trigger it on initial render, when there may not be a videoRef
     */
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    }); 

    this.player.attachMediaElement(this.videoRef.current); // attach ou
    this.player.load(); // load the video player
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;
    
    return (
      <div>
        {/* video is a JSX element that will become HTML frame for the video/stream that we are going to show on this component */}
        <video ref={this.videoRef} style={{ width: '100%'}} controls={true} /> 
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { getStream })(StreamShow);
