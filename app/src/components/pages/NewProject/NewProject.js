import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import NewProjectTemplate from '@templates/NewProject'
import {newProjectAction, newProjectUnloadAction} from '@actions/projects'

class NewProject extends Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  componentWillUnmount () {
    this.props.dispatch(newProjectUnloadAction())
  }

  submit (values) {
    this.props.dispatch(newProjectAction(values, this.props.history))
  }

  render () {
    return (
      <NewProjectTemplate
        formHandler={this.submit}
        errorMessage={this.props.errorMessage}
        successMessage={this.props.successMessage}
        isLoading={this.props.isLoading}
        newProjectData={this.props.newProjectData}
      />
    )
  }
}

NewProject.propTypes = {
  dispatch: PropTypes.func,
  isLoading: PropTypes.bool,
  history: PropTypes.object,
  errorMessage: PropTypes.any,
  successMessage: PropTypes.any,
  newProjectData: PropTypes.object
}

function mapStateToProps (state) {
  return {
    isLoading: state.projects.isLoading,
    errorMessage: state.projects.errorMessage,
    successMessage: state.projects.successMessage,
    newProjectData: state.projects.newProjectData
  }
}

export default connect(mapStateToProps)(NewProject)
