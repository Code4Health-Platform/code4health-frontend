import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProjectsIfNeeded, dashboardUnloadAction} from '@actions/dashboard'
import {Alert, Button, Heading, Paragraph} from '@atoms'
import {FormattedMessage} from 'react-intl'
import PropTypes from 'prop-types'

class Dashboard extends Component {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(fetchProjectsIfNeeded())
  }

  componentWillUnmount () {
    this.props.dashboardUnloadAction()
  }

  newProject () {
    console.log('new project')
  }

  render () {
    return (
      <div>
        <Heading level={2} icon='projects'>Projects</Heading>
        <Alert type='success' message={this.props.successMessage} />
        {this.props.isLoading && <h2>Loading</h2>}
        {this.props.data && this.props.data.length > 0 &&
          <div>
            <h2>Your operinos</h2>
            <p>{JSON.stringify(this.props.data)}</p>
          </div>
        }
        {this.props.data && this.props.data.length < 1 &&
          <Paragraph>
            <FormattedMessage id='projects.dashboard.noProjects' />
          </Paragraph>
        }

        <Button
          type='link'
          href='/projects/new'
          width='auto'
          icon='plus'
        >
          Create a project
        </Button>
      </div>
    )
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func,
  isLoading: PropTypes.bool,
  data: PropTypes.any,
  successMessage: PropTypes.string,
  dashboardUnloadAction: PropTypes.func
}

function mapStateToProps (state) {
  return {
    authenticated: state.auth.authenticated,
    data: state.dashboard.data,
    isLoading: state.dashboard.isLoading,
    successMessage: state.dashboard.success
  }
}

export default connect(mapStateToProps, {dashboardUnloadAction})(Dashboard)
