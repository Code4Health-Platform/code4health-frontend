import React, { Component } from 'react'
import {Fields, reduxForm} from 'redux-form'
import PropTypes from 'prop-types'
import {Button, Form} from '@atoms'
import {FormInput} from '@molecules'
import * as Validate from '@validators'

const renderFields = (fields) => (
  <div>
    <FormInput
      label='New Password'
      type='password'
      placeholder='new password'
      error={fields.newPassword.meta.error}
      touched={fields.newPassword.meta.touched}
      onChangeHandler={fields.newPassword.input.onChange}
      onBlurHandler={fields.newPassword.input.onBlur}
    />

    <FormInput
      type='password'
      placeholder='Confirm Password'
      label='Confirm Password' error={fields.confirmPassword.meta.error} touched={fields.confirmPassword.meta.touched}
      onChangeHandler={fields.confirmPassword.input.onChange}
      onBlurHandler={fields.confirmPassword.input.onBlur}
    />
  </div>
)

class PasswordChangeForm extends Component {
  render () {
    return (
      <Form onSubmit={this.props.handleSubmit(this.props.formHandler)}>

        <Fields
          names={['newPassword', 'confirmPassword']} component={renderFields} />

        <Button type='submit' disabled={this.props.invalid}>
          Save
        </Button>
      </Form>
    )
  }
}

PasswordChangeForm.propTypes = {
  handleSubmit: PropTypes.any,
  formHandler: PropTypes.func,
  invalid: PropTypes.bool
}

const validate = values => {
  const errors = {}

  if (!values.newPassword) {
    errors.newPassword = 'required'
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'required'
  }

  if (!Validate.Match(values.newPassword, values.confirmPassword)) {
    errors.confirmPassword = 'passwords must match'
  }

  return errors
}

const reduxFormPasswordChange = reduxForm({
  form: 'passwordChange',
  validate,
  fields: ['newPassword', 'confirmPassword']
})(PasswordChangeForm)

export default reduxFormPasswordChange
