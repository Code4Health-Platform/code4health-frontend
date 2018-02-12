import React, {Component} from 'react'
import {Fields, reduxForm} from 'redux-form'
import PropTypes from 'prop-types'
import {Button, Input, Paragraph} from '@atoms'

const renderFields = (fields) => (
  <div>
    <Input {...fields.username.input} type='text' placeholder='username' />
    <Input {...fields.email.input} type='text' placeholder='email' />
    <Input {...fields.password.input} type='password' placeholder='password' />
    <Input {...fields.confirmPassword.input} type='password' placeholder='confirm-password' />
  </div>
)

class SignUp extends Component {
  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        {this.props.errorMessage}

        {this.props.success &&
          <Paragraph>
            Thank you for signing up. Please check your email to activate your account.
          </Paragraph>
        }

        {!this.props.success &&
          <div>
            <Fields names={['username', 'email', 'password', 'confirmPassword']} component={renderFields} />
            <Button type='submit'>Create your account</Button>
            <Button variant='muted' href={`/log-in`}>
              Already registered? Log in
            </Button>
          </div>
        }
      </form>
    )
  }
}

SignUp.propTypes = {
  handleSubmit: PropTypes.any,
  errorMessage: PropTypes.string,
  success: PropTypes.bool
}

const reduxFormSignUp = reduxForm({
  form: 'signUp',
  fields: ['username', 'email', 'password', 'confirm-password']
})(SignUp)

export default reduxFormSignUp
