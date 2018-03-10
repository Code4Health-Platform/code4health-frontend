import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {ViewSingleProjectAction, UnloadAction} from '@actions/projects'
import SingleProjectTemplate from '@templates/SingleProject'

class SingleProject extends Component {
  componentDidMount () {
    this.props.dispatch(ViewSingleProjectAction(this.props.match.params.id))
  }

  componentWillUnmount () {
    this.props.dispatch(UnloadAction())
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
  dispatch: PropTypes.func,
  isLoading: PropTypes.bool,
  data: PropTypes.any,
  config: PropTypes.any,
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string,
  match: PropTypes.object
}

function mapStateToProps (state) {
  return {
    authenticated: state.auth.authenticated,
    data: state.projects.project,
    config: state.projects.config,
    isLoading: state.projects.isLoading,
    successMessage: state.projects.success
  }
}

export default connect(mapStateToProps)(SingleProject)
