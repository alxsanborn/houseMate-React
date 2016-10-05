import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';

const ChoresForm = (props) => {
    const { handleSubmit } = props;
    return (
      <form onSubmit={handleSubmit}>
      <div>
       <Field name="name" component={name =>
         <TextField name='name' hintText="Add a new chore" />
       } />
      </div>
      <button type='submit'>submit</button>
      </form>
    );

}

export default reduxForm({
  form: 'chores'
})(ChoresForm);
