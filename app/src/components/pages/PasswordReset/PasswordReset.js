import React, {Component} from 'react'
import {passwordResetAction, passwordResetUnloadAction} from '@actions/auth'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import PasswordResetTemplate from '@templates/PasswordReset'

class PasswordReset extends Component {
  constructor (props) {
    super(props)
    this.submit= this.submit.bind(this)
  }

  componentWillUnmount () {
    this.props.passwordResetUnloadAction()
  }

  submit (values) {
    this.props.passwordResetAction(values, this.props.history)
  }

  errorMessage () {
    if (this.props.errorMessage) {
      return (
        <div>Error {this.props.errorMessage}</div>
      )
    }
  }

  passwordResetForm () {
    return (
      <PasswordResetTemplate
        formHandler={this.submit}
        errorMessage={this.props.errorMessage}
      />
    )
  }

  render () {
    if (this.props.authenticated) {
      return (<h1>already logged in</h1>)
    } else {
      return this.passwordResetForm()
    }
  }
}

PasswordReset.propTypes = {
  authenticated: PropTypes.bool,
  errorMessage: PropTypes.string,
  history: PropTypes.object,
  passwordResetAction: PropTypes.func,
  passwordResetUnloadAction: PropTypes.func
}

function mapStateToProps (state) {
  return {
    errorMessage: state.auth.sign_up_error,
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, {passwordResetAction, passwordResetUnloadAction})(PasswordReset)
