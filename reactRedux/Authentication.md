# Authentication

## OAuth

Walkthrough setup [here](https://www.udemy.com/course/react-redux/learn/lecture/12700577#overview)

Where it is being implemented [here](streams/client/src/components/GoogleAuth.js)

An authentication tool from Google: 
- User authenticates with an outside service provider (Google, Linkedin, Facebook)
- User authorizes our app to access their information
- Outside provider tells us about the user
- We are trusting the outside provider to correctly handle indentification of the user
- OAuth can be used for
    - User identification
    - Our app making actions on behalf of a user.
- Provides auth for a range of 'scopes' i.e. details about your profile, or email etc, the list of scope for google is [here](developers.google.com/identity/protocols/googlescopes) we may commonly request for access to a uses email / profile via [google sign-in](https://developers.google.com/identity/protocols/oauth2/scopes#google-sign-in)
- More docs found [here](developers.google.com/api-client-library/javascript/reference/referencedocs), or search for gapi documentation.

## How to setup OAuth

1. Create a new project at console.developers.google.com
2. Set up an OAuth confirmation screen
3. Generate an OAuth Client ID
4. Install Googles API library, initialize it wiht the OAuth Client ID
5. Make sure the lib gets called any time the user clicks on the 'login with google button'

### GAPI (Google API / OAuth related)

```
gapi.load('client:auth2') // load auth2 client
gapi.client.init({ clientId: 'clientid'}) // initialize 

---
const auth = gapi.auth2.getAuthInstance() // if you check auth in console you will see a number of available methods.
auth.signIn() // will trigger a popup with a choose account selector, when user selects an account that is the auth account. If no popup appears you may already be signed in.
auth.isSignedIn.get() // will tell you if you are signed in or not. 



```
### OAuth for Servers
- Requests a 'token' that a server can use to make requests on behalf of the user
- Usually used when we have an app that needs to access user data `when they are not logged in`
- Difficult to setup as we need to store a lot of info about the user

### OAuth for JS Browser Apps
- Results in an 'token' that a browser app can use to make requests on behalf of the user.
- Usually used when we have an app that only needs to access user data `while they are logged in`.
- Very easy to setup, thanks to Google JS Library, which can automate the flow. 

Browser: 
    - User clicks `login with google` button
    - We use Googles JS library to initate OAuth process
Google Server: 
    - Google JS Lib makes auth request to Google
    - Google displays confirmaiton screen in a popup
    - User accepts, then popup closes
Browser: 
    - Google JS Library invokes a callback in our React/redux app
    - Callback is provided with 'authorization' token and profile for user

## Traditional Email / Password

- We store a record of user / password in a database
- When the user tries to log in we compare with what is saved
- A user is logged in when they enter the correct details
