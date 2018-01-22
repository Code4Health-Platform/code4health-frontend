import React, {Component} from 'react'
import {signUpAction, signUpUnloadAction} from '@actions/auth'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import SignUpTemplate from '@templates/SignUp'

class SignUp extends Component {
  constructor (props) {
    super(props)
    this.submit= this.submit.bind(this)
  }

  componentWillUnmount () {
    this.props.signUpUnloadAction()
  }

  submit (values) {
    console.log('submit: ' + JSON.stringify(values))
    console.log('props: ' + JSON.stringify(this.props))
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
  signUpUnloadAction: PropTypes.func
}

function mapStateToProps (state) {
  return {
    errorMessage: state.auth.sign_up_error,
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, {signUpAction, signUpUnloadAction})(SignUp)
