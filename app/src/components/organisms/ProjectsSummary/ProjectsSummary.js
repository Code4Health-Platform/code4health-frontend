import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {StyledProjectsSummary, ProjectContainer, ProjectsGridContainer} from './ProjectsSummary.styled.js'
import {Button, Heading, Link} from '@atoms'
import {FormInput, ProjectCard} from '@molecules'

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
        <FormInput
          placeholder='search'
          onChangeHandler={this.updateProjectsFilter}
          label='Search'
        />
        <ProjectsGridContainer>
          {this.props.projects.length < 1 &&
            <div>
              <Heading level={3}>No Project Found</Heading>
              <Button type='link'
                href='/projects/new'
                width='full'
                variant='muted'
              >
                Create a new Project
              </Button>
            </div>
          }

          {this.filterProjects(this.props.projects).length === 0 && this.state.filter !== '' &&
            <Heading level={3}>No projects found</Heading>
          }
          {this.filterProjects(this.props.projects).map((project, index) =>
            (
              <ProjectContainer key={index} >
                <ProjectCard data={project} interactive />
              </ProjectContainer>
            )
          )}
        </ProjectsGridContainer>
      </StyledProjectsSummary>
    )
  }
}

ProjectsSummary.propTypes = {
  projects: PropTypes.any
}

export default ProjectsSummary
