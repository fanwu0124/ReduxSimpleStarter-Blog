import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
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
      </div>
    );
  }

  render() {
    return (
        <form>
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
        </form>
    );
  };
}

//Connect component with the form reducer.
export default reduxForm({
  form: 'PostsNewForm' //The form name must be unique.
 })(PostsNew);
