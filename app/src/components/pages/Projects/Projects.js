import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ViewAllProjectsAction, UnloadAction} from '@actions/projects'
import PropTypes from 'prop-types'
import ProjectsTemplate from '@templates/Projects'

class Projects extends Component {
  componentDidMount () {
    this.props.dispatch(ViewAllProjectsAction())
  }

  componentWillUnmount () {
    this.props.dispatch(UnloadAction())
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.shouldRefresh) {
      this.props.dispatch(ViewAllProjectsAction())
    }
  }

  render () {
    return (
      <ProjectsTemplate
        isLoading={this.props.isLoading}
        successMessage={this.props.successMessage}
        errorMessage={this.props.errorMessage}
        projects={this.props.projects}
      />
    )
  }
}

Projects.propTypes = {
  dispatch: PropTypes.func,
  isLoading: PropTypes.bool,
  projects: PropTypes.any,
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string,
  shouldRefresh: PropTypes.bool
}

function mapStateToProps (state) {
  return {
    projects: state.projects.projects,
    isLoading: state.projects.isLoading,
    successMessage: state.projects.success,
    shouldRefresh: state.projects.shouldRefresh
  }
}

export default connect(mapStateToProps)(Projects)
