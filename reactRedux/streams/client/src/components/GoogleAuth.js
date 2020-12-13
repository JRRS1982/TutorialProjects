import React from "react";

/**
 * we have added <script src="https://apis.google.com/js/api.js"></script>  to the head of the public/index.html page which means that the google api is loaded, we are going go load this component in the Header of the React app itself.
 */
class GoogleAuth extends React.Component {
  state = { isSignedIn: null }; // default state

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
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange); // IMPORTANT - listen() as well as get() are prototype methods, they will not appear on the auth object, but its prototype. Listen here, takes a callback function, so you are listening to any changes on the isSignedIn object and then doing what the callback requires.
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() }); // This is a callback that is loaded on the component did mount element above, and will update the isSignedIn state of the app when the listen function hears a change to that. i.e. this is what updates state when the auth changes.
  };

  onSignIn = () => {
    this.auth.signIn();
  }

  onSignOut = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button class="ui red google button" onClick={this.onSignOut}>
          <i class="google icon"></i>
          Signout
        </button>
      );
    } else {
      return (
        <button class="ui red google button" onClick={this.onSignIn}>
          <i class="google icon"></i>
          Signin
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
