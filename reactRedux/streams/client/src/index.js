import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import App from "./components/App";
import reducers from "./reducers";


/**
 * this is what adds the chrome extension REDUX_REVTOOLS
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // REDUX DEV TOOLS CHROME EXTENSION
/**
 * create store takes the reducers which have been combined together by combineReducers function and creates a store object, which is basically the global state, which the application (the components) use to render the application.
 */
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware()) // cal
);

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.querySelector("#root")
);
