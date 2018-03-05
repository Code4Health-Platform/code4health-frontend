import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ButtonContainer, ComponentsContainer, Container, InnerContainer} from './ProjectCard.styled.js'
import {Button, Heading} from '@atoms'

class ProjectCard extends Component {
  // @todo - duplicated, should be abstracted away
  getIcon (component) {
    switch (component.toLowerCase()) {
      case 'cdr':
        return 'database'
      case 'demographics':
        return 'people'
      default:
        return 'square'
    }
  }

  render () {
    return (
      <Container id={this.props.data.id}>
        <InnerContainer>
          <Heading
            level={2}
            icon='project'
          >
            Project - {this.props.data.name}
          </Heading>

          {this.props.data.provision &&
            <Heading level={4} icon={'success'}>
              Provisioned
            </Heading>
          }

          {this.props.data.active &&
            <Heading level={4} icon={'success'}>
              Active
            </Heading>
          }

          <ComponentsContainer>
            <Heading level={3}>Components</Heading>
            {this.props.data.components && this.props.data.components.map((component, i) => (
              <Heading level={4} key={i} icon={this.getIcon(component.type)}>
                {component.type}
              </Heading>
            )
            )}
          </ComponentsContainer>

          <ButtonContainer>

            {this.props.interactive && <Button variant='danger' icon='delete'>Delete</Button>}

            <Button icon='eye' href={`/project/${this.props.data.id}`}>View Project</Button>

          </ButtonContainer>
        </InnerContainer>
      </Container>
    )
  }
}

ProjectCard.propTypes = {
  data: PropTypes.object,
  interactive: PropTypes.bool
}

export default ProjectCard
