import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ButtonContainer, ComponentsContainer, Container, InnerContainer, DeleteContainer} from './ProjectCard.styled.js'
import {Button, Heading} from '@atoms'
import {Loading} from '@molecules'
import {connect} from 'react-redux'
import {DeleteProjectAction} from '@actions/projects'

class ProjectCard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showDeleteConfirmation: false,
      id: this.props.data.id
    }
    this.cancelDeleteProject = this.cancelDeleteProject.bind(this)
    this.deleteProjectConfirmed = this.deleteProjectConfirmed.bind(this)
  }

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

  deleteProject () {
    this.setState({showDeleteConfirmation: true})
  }

  cancelDeleteProject () {
    this.setState({showDeleteConfirmation: false})
  }

  deleteProjectConfirmed () {
    this.setState({isDeleting: true})
    this.props.dispatch(DeleteProjectAction(this.state.id))
  }

  render () {
    const DeletingConfirmation = (
      <DeleteContainer visible={this.state.isDeleting}>
        <Loading text='deleting' />
      </DeleteContainer>
    )

    const DeleteProjectConfirmation = (
      <DeleteContainer
        visible={this.state.showDeleteConfirmation}>
        <div>
          <Heading level={2}>
            Are you sure you want to delete?
          </Heading>
          <Button icon='delete' variant='danger' onClick={this.deleteProjectConfirmed}>Confirm</Button>
          <Button
            variant='muted'
            onClick={this.cancelDeleteProject}
          >
            Cancel
          </Button>
        </div>
      </DeleteContainer>
    )

    return (
      <Container id={this.props.data.id}>
        <InnerContainer visible={!this.state.showDeleteConfirmation}>

          {DeleteProjectConfirmation}
          {DeletingConfirmation}

          <Heading level={2} icon='project'>
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
            <Button icon='eye' href={`/projects/${this.props.data.id}`}>View Project</Button>

            {this.props.interactive && <Button variant='muted' icon='delete' onClick={() => this.deleteProject(this.props.data.id)}>Delete</Button>}
          </ButtonContainer>

        </InnerContainer>
      </Container>
    )
  }
}

ProjectCard.propTypes = {
  data: PropTypes.object,
  interactive: PropTypes.bool,
  dispatch: PropTypes.func
}

export default connect()(ProjectCard)
