import React from 'react'
import {Grid} from 'grid-styled'
import {Alert, Heading} from '@atoms'
import {NewProjectForm} from '@organisms'
import PropTypes from 'prop-types'

const NewProject = props => (
  <div>
    <Grid w={1} p={1}>
      <Heading level={2} icon='plus'>
        Create a New Project
      </Heading>
      <Alert type='error' message={props.errorMessage} />
    </Grid>
    <Grid w={[1, 1/2, 1/2]} p={1}>
      <NewProjectForm
        onSubmit={props.formHandler}
        errorMessage={props.errorMessage}
      />
    </Grid>
  </div>
)

NewProject.propTypes = {
  formHandler: PropTypes.func,
  errorMessage: PropTypes.string
}

export default NewProject
