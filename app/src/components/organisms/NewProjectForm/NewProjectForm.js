import React, { Component } from 'react'
import {Fields, reduxForm} from 'redux-form'
import PropTypes from 'prop-types'
import {Button, Form} from '@atoms'
import {FormInput} from '@molecules'

const renderFields = (fields) => (
  <div>
    <FormInput
      type='text'
      placeholder='project name'
      label='Project Name'
      error={fields.name.meta.error}
      touched={fields.name.meta.touched}
      onChangeHandler={fields.name.input.onChange}
      onBlurHandler={fields.name.input.onBlur}
      content={fields.name.input.value}
    />

    <FormInput
      type='text'
      placeholder='project description'
      label='Project Description'
      error={fields.description.meta.error} touched={fields.description.meta.touched}
      onChangeHandler={fields.description.input.onChange}
      onBlurHandler={fields.description.input.onBlur}
      content={fields.description.input.value}
    />

    <FormInput
      type='text'
      placeholder='project alias'
      label='Unique Alias'
      error={fields.uniqueAlias.meta.error} touched={fields.uniqueAlias.meta.touched}
      onChangeHandler={fields.uniqueAlias.input.onChange}
      onBlurHandler={fields.uniqueAlias.input.onBlur}
      content={fields.uniqueAlias.input.value}
    />

  </div>
)

class NewProjectForm extends Component {
  render () {
    return (
      <Form onSubmit={this.props.handleSubmit(this.props.formHandler)}>

        <Fields names={['name', 'description', 'uniqueAlias']} component={renderFields} />

        <Button type='submit' disabled={this.props.invalid || this.props.isLoading} >
          Create new Project
        </Button>

        <Button variant='muted' href={`/projects`}>
          Cancel
        </Button>
      </Form>
    )
  }
}

NewProjectForm.propTypes = {
  handleSubmit: PropTypes.any,
  formHandler: PropTypes.any,
  invalid: PropTypes.bool,
  isLoading: PropTypes.bool
}

const validate = values => {
  const errors = {}

  if (!values.name) {
    errors.name = 'required'
  }

  if (!values.description) {
    errors.description = 'required'
  }

  if (!values.uniqueAlias) {
    errors.uniqueAlias = 'required'
  }

  return errors
}

const reduxFormNewProject = reduxForm({
  form: 'newProject',
  validate,
  fields: ['name', 'description', 'uniqueAlias']
})(NewProjectForm)

export default reduxFormNewProject
