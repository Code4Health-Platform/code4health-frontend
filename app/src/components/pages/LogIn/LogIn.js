import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { logInAction } from '@actions/auth'
import { connect } from 'react-redux'

class LogIn extends Component {
  submit = (values) => {
    this.props.logInAction(values, this.props.history)
  }

  errorMessage () {
    if (this.props.errorMessage) {
      return (
        <div>Error {this.props.errorMessage}</div>
      )
    }
  }

  logInForm () {
    const { handleSubmit } = this.props

    return (
      <div>
        <h1>Log In</h1>
        <div>
          {this.errorMessage()}
          <form onSubmit={ handleSubmit(this.submit) }>
            <Field
              name="username"
              component="input"
              type="text"
              placeholder="username"
            />
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="password"
            />
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    )
  }

  render () {
    if (this.props.authenticated) {
      return (<h1>already logged in</h1>)
    } else {
      return this.logInForm()
    }
  }
}

function mapStateToProps (state) {
  return {
    errorMessage: state.auth.error,
    authenticated: state.auth.authenticated
  }
}

const reduxFormLogIn = reduxForm({
  form: 'logIn'
})(LogIn)

export default connect(mapStateToProps, {logInAction})(reduxFormLogIn)
