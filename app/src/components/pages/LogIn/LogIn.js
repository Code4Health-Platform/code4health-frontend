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

  render () {
    const { handleSubmit } = this.props
    return (
      <div>
        <h1>Log In</h1>
        <div>
          {this.errorMessage()}
          <form onSubmit={ handleSubmit(this.submit) }>
            <Field
              name="email"
              component="input"
              type="text"
              placeholder="Email"
            />
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="Password"
            />
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { errorMessage: state.auth.error }
}

const reduxFormLogIn = reduxForm({
  form: 'logIn'
})(LogIn)

export default connect(mapStateToProps, {logInAction})(reduxFormLogIn)
