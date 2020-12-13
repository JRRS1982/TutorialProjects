import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

/**
 * we have added <script src="https://apis.google.com/js/api.js"></script>  to the head of the public/index.html page which means that the google api is loaded, we are going go load this component in the Header of the React app itself.
 */
class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      // when componet is first rendered load the gapi auth2 client
      window.gapi.client
        .init({
          // initialize the client with a Promise
          clientId:
            "119046588148-rkrb51d9fmddjig711mdrs4iapmjbsdp.apps.googleusercontent.com", // from the google project
          scope: "email", // what scope we are looking to get auth for.
        })
        .then(() => {
          // as init is a promise, we want to do something with the response... so we use then, which will act as soon as the Promise is resolved.
          this.auth = window.gapi.auth2.getAuthInstance(); // we reach into the dom/window to get the auth and set it in our app.
          this.onAuthChange(this.auth.isSignedIn.get()); // update auth state in redux 
          this.auth.isSignedIn.listen(this.onAuthChange); // IMPORTANT - listen() as well as get() are prototype methods, they will not appear on the auth object, but its prototype. Listen here, takes a callback function, so you are listening to any changes on the isSignedIn object and then doing what the callback requires.
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };;

  onSignOutClick = () => {
    this.auth.signOut();
  };;

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon"></i>
          Signout
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon"></i>
          Signin
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
}

export default connect(
  mapStateToProps, 
  { signIn, signOut }
)(GoogleAuth);


/**
 * return the GoogleID of the current user that is logged in.. unique id of a google user.
 * gapi.auth2.getAuthInstance().currentUser.get().getId()
 */
