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

    return (
      <form onSubmit={handleSubmit(this.props.formHandler)}>
        {this.props.errorMessage}

        {usernameField}

        <Button type='submit'>
          Reset
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
