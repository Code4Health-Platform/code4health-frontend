import React, {Component} from 'react'
import {signUpAction, signUpUnloadAction} from '@actions/auth'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import SignUpTemplate from '@templates/SignUp'

class SignUp extends Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  componentWillUnmount () {
    this.props.signUpUnloadAction()
  }

  submit (values) {
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
    return (
      <SignUpTemplate
        formHandler={this.submit}
        errorMessage={this.props.errorMessage}
        success={this.props.success}
      />
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
  signUpUnloadAction: PropTypes.func,
  success: PropTypes.bool
}

function mapStateToProps (state) {
  return {
    authenticated: state.auth.authenticated,
    error: state.auth.error,
    errorMessage: state.auth.errorMessage,
    loading: state.auth.loading,
    success: state.auth.success
  }
}

export default connect(mapStateToProps, {signUpAction, signUpUnloadAction})(SignUp)
