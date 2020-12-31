import React from "react";

/**
 * The context object is the inbetween element that is passed between parent and nested child component.
 *
 * a Context object is kind of like an interface, it has either a default value or is passed a data value from its parent, which is given to the nested child `Consumer` or is the nested childs this.context value.
 *
 * it creates a `context` for any component that it is imported into and used (see Button component), the default value of that is whatever is passed into the createContext function here.
 */

const Context = React.createContext('english');

export class LanguageStore extends React.Component {
  state = { language: 'english' }; // default

  onLanguageChange = (language) => { // callback to set
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {/* we pass this component some JSX, which can be other components we have created... they show up on this component as this.props.children  */}
        {this.props.children} 
      </Context.Provider>
    );
  }
}

export default Context;

/** 
 * so import LanguageContext from './LanguageContext'; to import the vanilla Context
 * or import { LanguageStore } ... to import this component
*/
