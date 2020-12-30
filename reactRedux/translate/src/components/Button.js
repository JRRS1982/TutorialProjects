import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

class Button extends React.Component {
  static contextType = LanguageContext; // contextType is a special name... needs this naming.

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Voorlegen'; // context comes from contextType static above, which is created by LanguageContext, what we are saying here is that, if the context is english then text = Submit, and we are assuming it is otherwise dutch.
    return <button className="ui button primary">{text}</button>;
  }
}

export default Button;