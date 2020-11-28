import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App";
import reducers from "./reducers";

/**
 * Provider is where the store is saved, it allows all the components in the applicaiton to have access to the store (via the Provider tag).
 */
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
  , document.querySelector("#root")
);
