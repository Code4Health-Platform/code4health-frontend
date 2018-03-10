import React from 'react'
import {Grid, Box, Flex} from 'grid-styled'
import {Alert, Button, Heading} from '@atoms'
import {Masthead} from '@molecules'
import {ProjectsSummary} from '@organisms'
import PropTypes from 'prop-types'

const Projects = props => (
  <div>

    <Masthead>
      <Flex flexWrap='wrap' alignItems='center'>
        <Box >
          <Heading level={2} icon='projects'>Projects</Heading>
        </Box>

        <Box ml='auto'>
          <Button
            type='link'
            href='/projects/new'
            width='auto'
            icon='plus'
          >
            Create a project
          </Button>
        </Box>
      </Flex>
    </Masthead>

    <Grid w={1} p='1rem'>
      <Alert type='error' message={props.errorMessage} />
      <Alert type='success' message={props.successMessage} />
    </Grid>

    <Grid w={1} p='1rem'>
      {props.projects && <ProjectsSummary projects={props.projects} />}
    </Grid>

  </div>
)

Projects.propTypes = {
  projects: PropTypes.array,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string
}

export default Projects
