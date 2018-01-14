import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { signUpAction } from '@actions/auth'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class SignUp extends Component {
  submit (values) {
    console.log('submit: ' + JSON.stringify(values))
    this.props.signUpAction(values, this.props.history)
  }

  errorMessage () {
    if (this.props.errorMessage) {
      return (
        <div>Error {this.props.errorMessage}</div>
      )
    }
  }

  signUpForm () {
    const { handleSubmit } = this.props

    return (
      <div>
        <h1>Sign Up</h1>
        <div>
          {this.errorMessage()}
          <form onSubmit={handleSubmit(this.submit.bind(this))}>
            <Field
              name='username'
              component='input'
              type='text'
              placeholder='username'
            />
            <Field
              name='password'
              component='input'
              type='password'
              placeholder='password'
            />
            <Field
              name='confirm-password'
              component='input'
              type='password'
              placeholder='confirm password'
            />
            <button type='submit'>create your account</button>
          </form>
        </div>
      </div>
    )
  }

  render () {
    if (this.props.authenticated) {
      return (<h1>already logged in</h1>)
    } else {
      return this.signUpForm()
    }
  }
}

SignUp.propTypes = {
  authenticated: PropTypes.bool,
  errorMessage: PropTypes.string,
  history: PropTypes.object,
  signUpAction: PropTypes.func,
  handleSubmit: PropTypes.func
}

function mapStateToProps (state) {
  return {
    errorMessage: state.auth.error,
    authenticated: state.auth.authenticated
  }
}

const reduxFormSignUp = reduxForm({
  form: 'signUp'
})(SignUp)

export default connect(mapStateToProps, {signUpAction})(reduxFormSignUp)
