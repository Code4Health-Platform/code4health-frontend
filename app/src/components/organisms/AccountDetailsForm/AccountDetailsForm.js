import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Fields, reduxForm} from 'redux-form'
import PropTypes from 'prop-types'
import {Alert, Button, Form} from '@atoms'
import {FormInput} from '@molecules'
import {getAccountDetails, updateAccount, changePassword} from '@actions/account'
import * as Validate from '@validators'

const renderFields = (fields, isLoading) => (
  <div>
    <FormInput
      type='text'
      placeholder='first name'
      label='First Name'
      error={fields.firstName.meta.error} touched={fields.firstName.meta.touched}
      onChangeHandler={fields.firstName.input.onChange}
      onBlurHandler={fields.firstName.input.onBlur}
      content={fields.firstName.input.value}
    />

    <FormInput
      type='text'
      placeholder='last name'
      label='Last Name'
      error={fields.lastName.meta.error} touched={fields.lastName.meta.touched}
      onChangeHandler={fields.lastName.input.onChange}
      onBlurHandler={fields.lastName.input.onBlur}
      content={fields.lastName.input.value}
    />

    <FormInput
      type='text'
      placeholder='email address'
      label='Email address'
      error={fields.email.meta.error} touched={fields.email.meta.touched}
      onChangeHandler={fields.email.input.onChange}
      onBlurHandler={fields.email.input.onBlur}
      content={fields.email.input.value}
    />

  </div>
)

class AccountDetailsForm extends Component {
  render () {
    return (
      <Form
        isLoading={this.props.isLoading} onSubmit={this.props.handleSubmit(this.props.formHandler)} >
        <Alert type='error' message={this.props.errorMessage} />
        <Alert type='success' message={this.props.successMessage} />

        <Fields
          names={['firstName', 'lastName', 'email']}
          component={renderFields}
          props={{isLoading: this.props.isLoading}}
        />

        <Button
          type='submit'
          isLoading={this.props.isLoading}
          disabled={this.props.invalid}
        >
          Update
        </Button>
      </Form>
    )
  }
}

AccountDetailsForm.propTypes = {
  isLoading: PropTypes.bool,
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string,
  handleSubmit: PropTypes.func,
  formHandler: PropTypes.func,
  invalid: PropTypes.bool
}

function mapStateToProps (state, ownProps) {
  return {
    account: state.account.details,
    authenticated: state.auth.authenticated,
    isLoading: state.account.isLoading
  }
}

const validate = values => {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = 'required'
  }

  if (!values.lastName) {
    errors.lastName = 'required'
  }

  if (!Validate.Email(values.email)) {
    errors.email = 'invalid email address'
  }

  if (!values.email) {
    errors.email = 'required'
  }

  return errors
}

const ConnectedAccountDetails = connect(mapStateToProps, {getAccountDetails, updateAccount, changePassword})(AccountDetailsForm)

export default reduxForm({
  form: 'updateAccountDetails',
  enableReinitialize: true,
  validate,
  fields: ['firstName', 'lastName', 'email']
})(ConnectedAccountDetails)
