import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Container, StyledProjectsSummary, ProjectTable, ProjectTableBody, ProjectTableRow, ProjectTableColumn} from './ProjectsSummary.styled.js'
import {Button, Input} from '@atoms'

class ProjectsSummary extends Component {
  constructor (props) {
    super(props)

    this.state = {
      filter: ''
    }

    this.updateProjectsFilter = this.updateProjectsFilter.bind(this)
    this.filterProjects = this.filterProjects.bind(this)
  }

  updateProjectsFilter (e) {
    this.setState({
      filter: e.target.value
    })
  }

  filterProjects (projects) {
    const filter = this.state.filter || ''

    return projects.filter(function (project) {
      return project.name.toLowerCase().search(
        filter) !== -1
    })
  }

  render () {
    return (
      <StyledProjectsSummary>
        <Container>
          <Input
            placeholder='search'
            onChange={this.updateProjectsFilter}
          />
          <ProjectTable>
            <ProjectTableBody>
              <ProjectTableRow>
                <ProjectTableColumn>Name</ProjectTableColumn>
                <ProjectTableColumn>Active</ProjectTableColumn>
                <ProjectTableColumn>Provision</ProjectTableColumn>
                <ProjectTableColumn />
              </ProjectTableRow>
              {this.filterProjects(this.props.projects).map((project) =>
                (
                  <ProjectTableRow key={`p${project.id}`}>
                    <ProjectTableColumn>{project.name}</ProjectTableColumn>
                    <ProjectTableColumn>{project.active ? 'true' : 'false'}</ProjectTableColumn>
                    <ProjectTableColumn>{project.provision ? 'true' : 'false'}</ProjectTableColumn>
                    <ProjectTableColumn>
                      <Button
                        type='link'
                        href={`/projects/${project.id}`}
                        width='full'
                        icon='eye'
                      >
                      View
                      </Button>

                      <Button
                        type='link'
                        href={`/projects/delete/${project.id}`}
                        width='full'
                        variant='danger'
                        icon='delete'
                      >
                      Delete
                      </Button>
                    </ProjectTableColumn>
                  </ProjectTableRow>
                )
              )}
            </ProjectTableBody>
          </ProjectTable>
        </Container>
      </StyledProjectsSummary>
    )
  }
}

ProjectsSummary.propTypes = {
  projects: PropTypes.any
}

export default ProjectsSummary
