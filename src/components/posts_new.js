import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderTitleField(field) {
    return (
      <div>
        <input
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
            name="title"
            component={ this.renderTitleField }
          />
        </form>
    );
  };
}

//Connect component with the form reducer.
export default reduxForm({
  form: 'PostsNewForm' //The form name must be unique.
 })(PostsNew);
