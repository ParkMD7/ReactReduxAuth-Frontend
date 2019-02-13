// dependencies
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';


class SignUp extends Component {

  onSubmit = (formProps) => {
    console.log(formProps)
  }

  render() {
    const { handleSubmit } = this.props; // given to us by Redux Form

    return (
      // Pass a reference to the onSubmit function as a CB to Redux Form Handle Submit
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field name="email" type="text" component="input" autoComplete="none" />
        </fieldset>

        <fieldset>
          <label>Password</label>
          <Field name="password" type="password" component="input" autoComplete="none" />
        </fieldset>
        <button>Sign Up</button>
      </form>
    );
  }

}

export default reduxForm({ form: 'signup' })(SignUp);
