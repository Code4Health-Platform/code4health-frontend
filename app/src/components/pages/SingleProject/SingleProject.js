import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types'
import {fetchSingleProjectIfNeeded, fetchProjectConfig, dashboardUnloadAction} from '@actions/dashboard'
import SingleProjectTemplate from '@templates/SingleProject'

class SingleProject extends Component {
  componentDidMount () {
    this.props.fetchSingleProjectIfNeeded(this.props.match.params.id)
    this.props.fetchProjectConfig(this.props.match.params.id)
  }

  componentWillUnmount () {
    this.props.dashboardUnloadAction()
  }

  render () {
    return (
      <SingleProjectTemplate
        isLoading={this.props.isLoading}
        successMessage={this.props.successMessage}
        errorMessage={this.props.errorMessage}
        project={this.props.data}
        config={this.props.config}
      />
    )
  }
}

SingleProject.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.any,
  config: PropTypes.any,
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string,
  dashboardUnloadAction: PropTypes.func,
  fetchSingleProjectIfNeeded: PropTypes.func,
  fetchProjectConfig: PropTypes.func,
  match: PropTypes.object
}

function mapStateToProps (state) {
  return {
    authenticated: state.auth.authenticated,
    data: state.dashboard.project,
    config: state.dashboard.config,
    isLoading: state.dashboard.isLoading,
    successMessage: state.dashboard.success
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    dashboardUnloadAction,
    fetchSingleProjectIfNeeded,
    fetchProjectConfig
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProject)
