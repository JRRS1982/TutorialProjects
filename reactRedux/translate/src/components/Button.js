import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColourContext from '../contexts/ColourContext'


class Button extends React.Component {
  // static contextType = LanguageContext; // contextType is a special name... needs this naming, and is used if we are not using a `Consumer`

  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Voorlegen';
  }

  renderButton(colour) {
    return (
      <button className={`ui button ${colour}`}>
        <LanguageContext.Consumer>
          {/* Always pass one argument to a consumer, which is always a function, and is actually 'a child' we we passing to the Consumer, it is going to get automatically called by the Consumer and going to be called with whatever 'value' is in the 'data pipe' i.e. Provier to Consumer pipe, only within the Consumer function can we have access to that value and descide what to print out - either Submit if the LanguageContext value is english, else print the Dutch version, this has been extracted into the render submit function and language has been destructured ou tof the context. */}
          {({language}) => this.renderSubmit(language)} 
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return ( 
      <ColourContext.Consumer>
        {(colour) => this.renderButton(colour)}
      </ColourContext.Consumer>
    );
  }
}

export default Button;