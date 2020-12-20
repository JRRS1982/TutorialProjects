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
    // you can destructure input, label and meta  out of this, but it think its not as clear.
    return (
      <div className="field">
        <label>{formProps.label}</label>
        {/* // DESTRUCTURED INPUT, I.E. TAKE ALL ELEMENTS from formProps.input and put them in the <input> element, this is the preferred way of using redux-form */}
        <input {...formProps.input} />
        {/* formProps are the properites of the form THE LABEL IS THE NAME OF A FIELD I.E. name="title" below in the render will be the formProps.lable of title... which has an input, the meta of that may have an error... which is this... */}
        <div>{formProps.meta.error}</div> 
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      /**
       * pass in handleSubmit to the onSubmit function, and provide whatever callback to handleSubmit to do something.
       */
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        {/* field being for input from the user and imported from redux-form, it needs a name, ie. its purpose, adn component, i.e. some component for it to display - it should probably be an <input> */}
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

/**
 * the validate function here is called at the first render, and whenever the form above is interacted with, it come from the redux-form middleware. 
 * 
 * If there are no errors the validate function should return an empty object, if there are errors the validate function shoudl return where the error is and a message i.e. title here is from the name="title" of the form above, and the error will show there on the component if it was missing.
 */
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) { errors.title = "You must return a title"};
  if (!formValues.description) { errors.description = "You must return a description" };
  return errors;
}

export default reduxForm({
  // kind of replacing the connect function.
  form: "streamCreate", // what we are naming this form
  validate // descructured as same name, this is called every time the form renders and is interacted with
})(StreamCreate);
