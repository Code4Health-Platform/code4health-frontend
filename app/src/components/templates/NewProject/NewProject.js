import React from 'react'
import {Grid} from 'grid-styled'
import {Alert, Heading} from '@atoms'
import {Masthead} from '@molecules'
import {NewProjectForm, NewProjectSummary} from '@organisms'
import PropTypes from 'prop-types'

const NewProject = props => (
  <div>
    <Masthead>
      <Heading level={2} icon='plus'>Create a new project</Heading>
    </Masthead>

    <Grid w={[0, 1/4]} />

    <Grid w={[1, 1/2, 1/2]} p='1rem'>

      <Alert type='error' message={props.errorMessage} />
      <Alert type='success' message={props.successMessage} />

      {!props.newProjectData && <NewProjectForm formHandler={props.formHandler} />}
      {props.newProjectData && <NewProjectSummary data={props.newProjectData} />}

    </Grid>
  </div>
)

NewProject.propTypes = {
  formHandler: PropTypes.func,
  newProjectData: PropTypes.object,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string
}

export default NewProject
