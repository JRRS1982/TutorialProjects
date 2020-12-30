import React from 'react'
import { Field, reduxForm } from "redux-form";

/**
 * a component to reduce duplication. Edit and create basically use the same layout, so we are using this as a skeleton for that. 
 * 
 * 1. When user tries to submit a form, we are going to validate the inputs 
 * 2. If valid, will call onSubmit
 * 3. onSubmit will call createStream
 * 4. createStream will post to /streams with the formValues using axios to our api server
 * 5. a new stream should appear in api/db.json 
 * 
 */
class StreamForm extends React.Component {
    /**
     *  The render method is calling this twice, once for each Field that is being rendered, what we are doing is creating a link here between the component and the DOM, providing a callback to the dom what will update the component with input once it changes, and the component will then have props which will be provided to the DOM at render. It removes the action creators / reducers - which is why we are using redux-form
   */
  renderError({touched, error}) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({input, label, meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }
  /**
   * streamForm will be passed a callback (props.onSubmit) from its parents component in the props, and that callback will be called with any values coming from the form. Which is what makes this reusable.
   */
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
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


//  the validate function here is called at the first render, and whenever the form above is interacted with, it come from the redux-form middleware. 
 
//   If there are no errors the validate function should return an empty object, if there are errors the validate function shoudl return where the error is and a message i.e. title here is from the name="title" of the form above, and the error will show there on the component if it was missing.
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) { errors.title = "You must return a title"};
  if (!formValues.description) { errors.description = "You must return a description" };
  return errors;
}

export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);
