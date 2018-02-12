import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProjectsIfNeeded} from '@actions/dashboard'
import {Paragraph} from '@atoms'
import {FormattedMessage} from 'react-intl'
import PropTypes from 'prop-types'

class Dashboard extends Component {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(fetchProjectsIfNeeded())
  }

  render () {
    const { isLoading } = this.props
    return (
      <div>
        <h1>Projects</h1>
        {isLoading && <h2>Loading</h2>}
        {this.props.data && this.props.data.length > 0 && <h2>Your operinos</h2>}
        {this.props.data && <Paragraph><FormattedMessage id='projects.dashboard.noProjects' /></Paragraph>}
      </div>
    )
  }
}

Dashboard.propTypes = {
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

export default connect(mapStateToProps)(Dashboard)
