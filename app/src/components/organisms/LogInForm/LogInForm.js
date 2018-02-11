import React, { Component } from 'react'
import {Field, reduxForm} from 'redux-form'
import PropTypes from 'prop-types'
import {Button, Input} from '@atoms'
import {injectIntl} from 'react-intl'

class LoginForm extends Component {
  usernameField () {
    return (
      <Field
        name='username'
        component={field =>
          <Input
            label={this.props.intl.formatMessage({id: 'auth.logIn.form.username.label'})}
            type='text'
            placeholder='username'
            content={field.input.value}
            onChangeHandler={param =>
              field.input.onChange(param)
            }
          />
        }
      />
    )
  }

  passwordField () {
    return (
      <Field
        name='password'
        component={field =>
          <Input
            label={this.props.intl.formatMessage({id: 'auth.logIn.form.password.label'})}
            type='password'
            placeholder='password'
            content={field.input.value}
            onChangeHandler={param =>
              field.input.onChange(param)
            }
          />
        }
      />
    )
  }

  render () {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.formHandler)}>
        {this.props.errorMessage}

        {this.usernameField()}

        {this.passwordField()}

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
  formHandler: PropTypes.func,
  handleSubmit: PropTypes.any,
  errorMessage: PropTypes.string,
  intl: PropTypes.any
}

const reduxFormLogin = reduxForm({
  form: 'signUp',
  fields: ['username', 'password', 'confirm-password']
})(LoginForm)

export default injectIntl(reduxFormLogin)
