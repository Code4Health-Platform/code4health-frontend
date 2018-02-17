import React, { Component } from 'react'
import {Fields, reduxForm} from 'redux-form'
import PropTypes from 'prop-types'
import {Button, Input} from '@atoms'

const renderFields = (fields) => (
  <Input {...fields.email.input} type='text' placeholder='email' />
)

class PasswordResetForm extends Component {
  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>

        <Fields names={['email']} component={renderFields} />

        <Button type='submit'>
          Reset
        </Button>
      </form>
    )
  }
}

PasswordResetForm.propTypes = {
  handleSubmit: PropTypes.any
}

const reduxFormPasswordReset = reduxForm({
  form: 'passwordReset',
  fields: ['email']
})(PasswordResetForm)

export default reduxFormPasswordReset
