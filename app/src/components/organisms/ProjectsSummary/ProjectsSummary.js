import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Container, StyledProjectsSummary, ProjectContainer, ProjectsGridContainer} from './ProjectsSummary.styled.js'
import {Input} from '@atoms'
import {ProjectCard} from '@molecules'

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
        <Input
          placeholder='search'
          onChange={this.updateProjectsFilter}
        />
        <ProjectsGridContainer>
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
