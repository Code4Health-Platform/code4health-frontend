import React from 'react'
import {Grid} from 'grid-styled'
import {Alert, Heading} from '@atoms'
import {ProjectConfiguration, ProjectComponents} from '@organisms'
import PropTypes from 'prop-types'

const SingleProject = props => (
  <div>
    <Grid w={1}>
      <Heading level={1} icon='projects'>
        Project
        {props.project && ` - ${props.project.name}`}
      </Heading>
      <Alert type='error' message={props.errorMessage} />
      <Alert type='success' message={props.successMessage} />
    </Grid>

    <Grid w={1}>
      {props.config && <ProjectConfiguration config={props.config} />}
      {props.project && <ProjectComponents project={props.project} />}
    </Grid>
  </div>
)

SingleProject.propTypes = {
  project: PropTypes.any,
  config: PropTypes.any,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string
}

export default SingleProject
