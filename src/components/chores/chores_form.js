import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';

class ChoresForm extends React.Component {
  constructor(){
    super();

    this.state = {
      name: ""
    }

    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event){
    this.setState({name: event.target.value})
  }

  render(){
    return (
      <form>
        <Field name="name" component={
          name =>
            <TextField name='name' hintText="Chore" onChange={this.handleInput} />
        }/>
      </form>
    )
  }
}


// const ChoresForm = (props) => {
//     const { handleSubmit } = props;
//
//
//
//     return (
//       <form>
//        <Field name="name" component={name =>
//          <TextField name='name' hintText="Chore" />
//        } />
//       </form>
//     );
// }
//
export default reduxForm({
  form: 'chores'
})(ChoresForm);
