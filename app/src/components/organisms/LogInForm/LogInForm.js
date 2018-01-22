import React, { Component } from 'react'
import {Field, reduxForm} from 'redux-form'
import PropTypes from 'prop-types'

import {Button, Input} from '@atoms'

class LoginForm extends Component {
  render () {
    const {handleSubmit} = this.props

    const usernameField = (
      <Field
        name='username'
        component={field =>
          <Input
            type='text'
            placeholder='username'
            content={field.input.value}
            onChangeHander={param =>
              field.input.onChange(param)
            }
          />
        }
      />
    )

    const passwordField = (
      <Field
        name='password'
        component={field =>
          <Input
            type='password'
            placeholder='password'
            content={field.input.value}
            onChangeHander={param =>
              field.input.onChange(param)
            }
          />
        }
      />
    )

    return (
      <form onSubmit={handleSubmit(this.props.formHandler)}>
        {this.props.errorMessage}

        {usernameField}

        {passwordField}

        <Button type='submit'>
          Log In
        </Button>

        <Button variant='muted' href={`/sign-up`}>
          Not yet registered? Sign up
        </Button>
      </form>
    )
  }
}

LoginForm.propTypes = {
  formHandler: PropTypes.func,
  handleSubmit: PropTypes.any,
  errorMessage: PropTypes.string
}

const reduxFormLogin = reduxForm({
  form: 'signUp',
  fields: ['username', 'password', 'confirm-password']
})(LoginForm)

export default reduxFormLogin
