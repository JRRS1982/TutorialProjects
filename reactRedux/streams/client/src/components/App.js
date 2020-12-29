import React from "react";
import { Router, Route } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from '../history';


const App = () => {
  return (
    <div className="ui container">
      {/* Router / BrowserRouter has a default history implementation, instead of using that we have created a history object that we will use, we need this as it allows more than just the components to refer to the history, i.e. action creators will be able to use it / redirect the user if we have it */}
      <Router history={history}>
        <Header></Header>
        <div>
          <Route path="/" exact component={StreamList}></Route>
          <Route path="/streams/new" exact component={StreamCreate}></Route>
          <Route path="/streams/edit/:id" exact component={StreamEdit}></Route>
          <Route path="/streams/delete/:id" exact component={StreamDelete}></Route>
          <Route path="/streams/show" exact component={StreamShow}></Route>
        </div>
      </Router>
    </div>
  );
};

export default App;
