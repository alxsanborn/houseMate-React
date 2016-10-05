import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';

const ChoresForm = (props) => {
    const { handleSubmit } = props;
    return (
      <form>
      <div>
       <Field name="name" component={name =>
         <TextField name='name' hintText="Chore" />
       } />
      </div>
      </form>
    );

}

export default reduxForm({
  form: 'chores'
})(ChoresForm);
