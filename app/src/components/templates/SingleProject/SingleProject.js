import React from 'react'
import {Grid} from 'grid-styled'
import {Alert, Heading} from '@atoms'
import {Masthead} from '@molecules'
import {ProjectConfiguration, ProjectComponents, ProjectPostman} from '@organisms'
import PropTypes from 'prop-types'

const SingleProject = props => (
  <div>
    <Masthead>
      <Heading level={2} icon='project'>
        Project
        {props.project && <span> - {props.project.name}</span>}
      </Heading>
    </Masthead>

    <Alert type='error' message={props.errorMessage} />
    <Alert type='success' message={props.successMessage} />

    <Grid w={1} p='1rem'>
      {props.config && <ProjectConfiguration config={props.config} />}
      {props.project && <ProjectPostman link='/todo' />}
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
