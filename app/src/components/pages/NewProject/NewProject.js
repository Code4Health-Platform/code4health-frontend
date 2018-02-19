import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import NewProjectTemplate from '@templates/NewProject'
import {newProjectAction, newProjectUnloadAction} from '@actions/dashboard'

class NewProject extends Component {
  constructor (props) {
    super(props)
    this.submit= this.submit.bind(this)
  }

  componentWillUnmount () {
    this.props.newProjectUnloadAction()
  }

  submit (values) {
    this.props.newProjectAction(values, this.props.history)
  }

  render () {
    if (this.props.isLoading) {
      return (
        <div>is loading</div>
      )
    } else {
      return (
        <NewProjectTemplate
          formHandler={this.submit}
          errorMessage={this.props.errorMessage}
          successMessage={this.props.successMessage}
        />
      )
    }
  }
}

NewProject.propTypes = {
  isLoading: PropTypes.bool,
  history: PropTypes.object,
  errorMessage: PropTypes.any,
  successMessage: PropTypes.any,
  newProjectAction: PropTypes.func,
  newProjectUnloadAction: PropTypes.func
}

function mapStateToProps (state) {
  return {
    isLoading: state.dashboard.isLoading,
    errorMessage: state.dashboard.errorMessage
  }
}

export default connect(mapStateToProps, {newProjectAction, newProjectUnloadAction})(NewProject)
