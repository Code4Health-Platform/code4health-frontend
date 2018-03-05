import React, {Component} from 'react'
import {reduxForm} from 'redux-form'
import {logInAction, logInUnloadAction} from '@actions/auth'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import LogInTemplate from '@templates/LogIn'

class LogIn extends Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  componentWillUnmount () {
    this.props.logInUnloadAction()
  }

  submit (values) {
    this.props.logInAction(values, this.props.history)
  }

  render () {
    if (this.props.authenticated) {
      return (<h1>already logged in</h1>)
    } else {
      return (
        <LogInTemplate
          formHandler={this.submit}
          errorMessage={this.props.errorMessage}
        />
      )
    }
  }
}

LogIn.propTypes = {
  authenticated: PropTypes.bool,
  errorMessage: PropTypes.string,
  history: PropTypes.object,
  logInAction: PropTypes.func,
  logInUnloadAction: PropTypes.func
}

function mapStateToProps (state) {
  return {
    errorMessage: state.auth.log_in_error,
    authenticated: state.auth.authenticated
  }
}

const reduxFormLogIn = reduxForm({
  form: 'logIn'
})(LogIn)

export default connect(mapStateToProps, {logInAction, logInUnloadAction})(reduxFormLogIn)
