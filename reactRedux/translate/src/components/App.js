import React from "react";
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColourContext from '../contexts/ColourContext';


class App extends React.Component {
  state = { language: "english" }; // setting the default language as english

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        
        {/* wrapping UserCreate in the LanguageContext like this is providing the 'context' with the value of state, without the LanguageContext wrap the UserCreate and its children will rely on default value */}
        <ColourContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColourContext.Provider>
      </div>
    );
  }
}

export default App;
