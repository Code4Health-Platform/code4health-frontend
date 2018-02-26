import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Button, Heading} from '@atoms'
import {Grid} from 'grid-styled'

class ProjectPostman extends Component {
  render () {
    return (
      <div>
        <Heading level={2}>Postman</Heading>
        <Grid w={1} p={[0, 1]}>
          <Button to={this.props.link} width='auto' icon='download'>
            Download Postman files
          </Button>
        </Grid>
      </div>

    )
  }
}

ProjectPostman.propTypes = {
  link: PropTypes.string
}

export default ProjectPostman
