import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Container, StyledProjectsSummary, ProjectTable, ProjectTableBody, ProjectTableRow, ProjectTableColumn} from './ProjectsSummary.styled.js'
import {Button} from '@atoms'

class ProjectsSummary extends Component {
  render () {
    return (
      <StyledProjectsSummary>
        <Container>
          <ProjectTable>
            <ProjectTableBody>
              <ProjectTableRow>
                <ProjectTableColumn>Name</ProjectTableColumn>
                <ProjectTableColumn>Active</ProjectTableColumn>
                <ProjectTableColumn>Provision</ProjectTableColumn>
                <ProjectTableColumn />
              </ProjectTableRow>
              {this.props.projects.map((project) =>
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
