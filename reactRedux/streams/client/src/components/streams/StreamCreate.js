import React from 'react'
import { Field, reduxForm } from "redux-form";

/**
 * Field being a component that we are going to display on the page and redux-from being just like the connect function.. as that is what it is really replacing.
 */
class StreamCreate extends React.Component {
  /**
   * The render method is calling this twice, once for each Field that is being rendered, what we are doing is creating a link here between the component and the DOM, providing a callback to the dom what will update the component with input once it changes, and the component will then have props which will be provided to the DOM at render. It removes the action creators / reducers - which is why we are using redux-form
   */
  renderInput(formProps) {
    // you can destructure .input out of this, but it think its not as clear.
    return (
      <div className="field">
        <label>{formProps.label}</label>
        {/* // DESTRUCTURED INPUT, I.E. TAKE ALL ELEMENTS from formProps.input and put them in the <input> element, this is the preferred way of using redux-form */}
        <input {...formProps.input} />
      </div>
    );
  }

  render() {
    return (
      <form className="ui form">
        {/* field being for input from the user and imported from redux-form, it needs a name, ie. its purpose, adn component, i.e. some component for it to display - it should probably be an <input> */}
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
      </form>
    );
  }
}

export default reduxForm({
  // kind of replacing the connect function.
  form: "streamCreate", // what we are naming this form
})(StreamCreate);
