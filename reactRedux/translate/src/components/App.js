import React from "react";
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColourContext from '../contexts/ColourContext';
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        {/* LanguageStore: both the selector and create below need access to the language in the store, so they are wrapped within it  */}
        <LanguageStore>
          {/* LanguageSelector: we are passing a callback which if there is a change in language will call this and update the Store, causing this component and therefore child components to rerender */}
          <LanguageSelector /> 
          {/* wrapping UserCreate in the LanguageContext like this is providing the 'context' with the value of state, without the LanguageContext wrap the UserCreate and its children will rely on default value */}
          <ColourContext.Provider value="red">
              <UserCreate />
          </ColourContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
