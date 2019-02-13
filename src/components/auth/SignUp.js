// dependencies
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';

// user files
import * as actions from '../../actions'


class SignUp extends Component {

  onSubmit = (formProps) => {
    this.props.signup(formProps, () => {
      this.props.history.push('/feature')
    })
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
        <div>{this.props.errorMessage}</div>
        <button>Sign Up</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  errorMessage: state.auth.errorMessage
})


// Using 'compose' from Redux to apply multiple HOC's to a single React Component with cleaner syntax
export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })
)(SignUp);
