import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderField(field) {
    const { meta: { touched, error } } = field; //ES6 syntax, destruct nested objects.
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
       <label>{ field.label }</label>
        <input
          className="form-control"
          type="text"
          //This lets all properties of field to be communicatedd as props to the input tag
          //It's like adding the following props into the input tag:
          //onChange={field.input.onChnage}
          //onFocus={field.input.onFocus}
          //onBlur={field.input.onBlur}
          {...field.input}
        />
        <div className="text-help">
          {/*Show validation message only when the input has been touched.*/}
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
        //handelSubmit is going to run the redux form things when clicking submit.
        //It runs the validation and then call the callback this.onSubmit to finally submit the form.
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            component={ this.renderField }
          />
          <Field
            label="Categories"
            name="categories"
            component={ this.renderField }
          />
          <Field
            label="Post Content"
            name="content"
            component={ this.renderField }
          />
          <button type="submit" className="btn btn-primary">
          Submit
          </ button>
        </form>
    );
  };
}

function validate(values) {
  //values = {title: 'abcd', categories: 'dfasef', content: 'gfaewfs'}
  const errors = {};

  //Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title.";
  }

  if (!values.categories) {
    errors.categories = 'Enter some categories.';
  }

  if (!values.content) {
    errors.content = 'Enter some content.'
  }

  //If errors is empty, the form is fine to submit.
  //If errors has any properties, redux form assumes form is invalid.
  return errors;
}

//Connect component with the form reducer.
export default reduxForm({
  validate, //same as validate: validate,
  form: 'PostsNewForm' //The form name must be unique.
 })(PostsNew);
