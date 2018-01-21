import React, {Component} from 'react'
import {reduxForm} from 'redux-form'
import {logInAction} from '@actions/auth'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import LogInTemplate from '@templates/LogIn'

class LogIn extends Component {
  constructor (props) {
    super(props)
    this.submit= this.submit.bind(this)
  }

  submit (values) {
    console.log('submit: ' + JSON.stringify(values))
    console.log('props: ' + JSON.stringify(this.props))
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
    if (this.props.authenticated) {
      return (<h1>already logged in</h1>)
    } else {
      return (
        <LogInTemplate formHandler={this.submit} />
      )
    }
  }
}

LogIn.propTypes = {
  authenticated: PropTypes.bool,
  errorMessage: PropTypes.string,
  history: PropTypes.object,
  logInAction: PropTypes.func
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
