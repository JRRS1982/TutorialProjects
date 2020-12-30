import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

class Button extends React.Component {
  // static contextType = LanguageContext; // contextType is a special name... needs this naming, and is used if we are not using a `Consumer`


  render() {
    // const text = this.context === 'english' ? 'Submit' : 'Voorlegen'; // context comes from contextType static above, which is created by LanguageContext, what we are saying here is that, if the context is english then text = Submit, and we are assuming it is otherwise dutch.
    return ( 
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {/* Always pass one arguemtn to a consumer, which is always a function. A child we we passing to the Consumer,  */}
          {(value) => value === 'english' ? 'Submit' : 'Voorlegen'};
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;