import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Button} from '@atoms'
import {ProjectCard} from '@molecules'

class NewProjectSummary extends Component {
  render () {
    return (
      <div>
        <ProjectCard data={this.props.data} interactive={false} />
        <Button variant='muted' href={`/projects`}>Back to projects</Button>
      </div>
    )
  }
}

NewProjectSummary.propTypes = {
  data: PropTypes.object
}

export default NewProjectSummary
