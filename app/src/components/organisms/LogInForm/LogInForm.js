import React, { Component } from 'react'
import {Fields, reduxForm} from 'redux-form'
import PropTypes from 'prop-types'
import {Button, FormSeparator} from '@atoms'
import {FormInput} from '@molecules'

const renderFields = (fields) => (
  <div>
    <FormInput
      type='text'
      placeholder='Email Address'
      label='Email address'
      error={fields.username.meta.error} touched={fields.username.meta.touched}
      onChangeHandler={fields.username.input.onChange}
      onBlurHandler={fields.username.input.onBlur}
      required
    />

    <FormInput
      type='password'
      placeholder='Password'
      label='Password'
      error={fields.password.meta.error} touched={fields.password.meta.touched}
      onChangeHandler={fields.password.input.onChange}
      onBlurHandler={fields.password.input.onBlur}
      required
    />
  </div>
)

class LoginForm extends Component {
  render () {
    return (
      <div>
        <Button type='' variant='github' icon='github'>
          Log In with Github
        </Button>

        <Button type='' variant='google' icon='google'>
          Log In with Google
        </Button>

        <FormSeparator>or</FormSeparator>

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
      </div>
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
