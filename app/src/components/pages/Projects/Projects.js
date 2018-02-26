import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProjectsIfNeeded, dashboardUnloadAction} from '@actions/dashboard'
import PropTypes from 'prop-types'
import ProjectsTemplate from '@templates/Projects'

class Projects extends Component {
  componentDidMount () {
    this.props.dispatch(fetchProjectsIfNeeded())
  }

  componentWillUnmount () {
    this.props.dashboardUnloadAction()
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
  dashboardUnloadAction: PropTypes.func
}

function mapStateToProps (state) {
  return {
    authenticated: state.auth.authenticated,
    projects: state.dashboard.projects,
    isLoading: state.dashboard.isLoading,
    successMessage: state.dashboard.success
  }
}

export default connect(mapStateToProps, {dashboardUnloadAction})(Projects)
