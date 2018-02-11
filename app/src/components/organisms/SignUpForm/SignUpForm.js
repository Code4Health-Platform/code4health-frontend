import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import PropTypes from 'prop-types'
import {Button, Input} from '@atoms'

class SignUp extends Component {
  render () {
    const {handleSubmit} = this.props

    return (
      <form onSubmit={handleSubmit(this.props.formHandler)}>
        {this.props.errorMessage}
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
        <Field
          name='email'
          component={field =>
            <Input
              type='text'
              placeholder='email'
              content={field.input.value}
              onChangeHander={param =>
                field.input.onChange(param)
              }
            />
          }
        />
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
        <Field
          name='confirm-password'
          component={field =>
            <Input
              type='password'
              placeholder='confirm password'
              content={field.input.value}
              onChangeHander={param =>
                field.input.onChange(param)
              }
            />
          }
        />
        <Button type='submit'>Create your account</Button>
        <Button variant='muted' href={`/log-in`}>
          Already registered? Log in
        </Button>
      </form>
    )
  }
}

SignUp.propTypes = {
  formHandler: PropTypes.func,
  handleSubmit: PropTypes.any,
  errorMessage: PropTypes.string
}

const reduxFormSignUp = reduxForm({
  form: 'signUp',
  fields: ['username', 'email', 'password', 'confirm-password']
})(SignUp)

export default reduxFormSignUp
