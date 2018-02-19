import React, { Component } from 'react'
import {Fields, reduxForm} from 'redux-form'
import PropTypes from 'prop-types'
import {Button, Input} from '@atoms'

const renderFields = (fields) => (
  <div>
    <Input {...fields.name.input} type='text' placeholder='project name' />
    <Input {...fields.description.input} type='text' placeholder='description' />
    <Input {...fields.uniqueAlias.input} type='text' placeholder='unique alias' />
  </div>
)

class NewProjectForm extends Component {
  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Fields names={['name', 'description', 'uniqueAlias']} component={renderFields} />

        <Button type='submit' width='auto'>
          Create new Project
        </Button>

        <Button variant='muted' href={`/projects`} width='auto'>
          Cancel
        </Button>
      </form>
    )
  }
}

NewProjectForm.propTypes = {
  handleSubmit: PropTypes.any
}

const reduxFormNewProject = reduxForm({
  form: 'newProject',
  fields: ['name', 'description', 'uniqueAlias']
})(NewProjectForm)

export default reduxFormNewProject
