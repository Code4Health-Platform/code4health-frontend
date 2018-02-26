import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Heading} from '@atoms'
import {ComponentCard} from '@molecules'
import {ComponentCardContainer} from './ProjectComponents.styled.js'

class ProjectComponents extends Component {
  render () {
    return (
      <div>
        <Heading level={2}>Components</Heading>

        <ComponentCardContainer>
          {this.props.project.components.map((component) =>
            (
              <ComponentCard
                id={component.id}
                type={component.type.toLowerCase()}
                available={component.availability}
              />
            )
          )}
        </ComponentCardContainer>
      </div>
    )
  }
}

ProjectComponents.propTypes = {
  project: PropTypes.any
}

export default ProjectComponents
