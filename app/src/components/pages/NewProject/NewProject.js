import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Heading, Paragraph} from '@atoms'
import {FormattedMessage} from 'react-intl'
import PropTypes from 'prop-types'

class NewProject extends Component {
  render () {
    return (
      <div>
        <Heading level={2} icon='plus'>Create a New Project</Heading>
      </div>
    )
  }
}

NewProject.propTypes = {
  dispatch: PropTypes.func,
  isLoading: PropTypes.bool,
  data: PropTypes.any
}

function mapStateToProps (state) {
  return {
    authenticated: state.auth.authenticated,
    data: state.dashboard.data,
    isLoading: state.dashboard.isLoading
  }
}

export default connect(mapStateToProps)(NewProject)
