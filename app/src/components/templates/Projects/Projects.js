import React from 'react'
import {Grid} from 'grid-styled'
import {Alert, Button, Heading} from '@atoms'
import {Masthead} from '@molecules'
import {ProjectsSummary} from '@organisms'
import PropTypes from 'prop-types'

const ProjectDashboard = props => (
  <div>

    <Masthead>
      <Heading level={2} icon='projects'>Projects</Heading>
    </Masthead>

    <Grid w={1} p={1}>
      <Alert type='error' message={props.errorMessage} />
      <Alert type='success' message={props.successMessage} />
    </Grid>

    <Grid w={1 / 2} p={1}>
      Search
    </Grid>

    <Grid w={[1, 3 / 4]} p={1}>
      {props.projects && <ProjectsSummary projects={props.projects} />}
    </Grid>

    <Grid w={[1, 1 / 4]} p={1}>
      <Button
        type='link'
        href='/projects/new'
        width='full'
        icon='plus'
      >
        Create a project
      </Button>
    </Grid>

  </div>
)

ProjectDashboard.propTypes = {
  projects: PropTypes.array,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string
}

export default ProjectDashboard
