import React, { Component } from 'react'
import {Fields, reduxForm} from 'redux-form'
import PropTypes from 'prop-types'
import {Button, Input} from '@atoms'

const renderFields = (fields) => (
  <div>
    <Input {...fields.username.input} type='text' placeholder='username' />
    <Input {...fields.password.input} type='password' placeholder='password' />
  </div>
)

class LoginForm extends Component {
  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        {this.props.errorMessage}

        <Fields names={['username', 'password']} component={renderFields} />

        <Button type='submit'>
          Log In
        </Button>

        <Button variant='muted' href={`/sign-up`}>
          Not yet registered? Sign up
        </Button>

        <Button variant='muted' href={`/forgot-password`}>
          Forgotten your password?
        </Button>
      </form>
    )
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.any,
  errorMessage: PropTypes.string
}

const reduxFormLogin = reduxForm({
  form: 'signUp',
  fields: ['username', 'password', 'confirm-password']
})(LoginForm)

export default reduxFormLogin
