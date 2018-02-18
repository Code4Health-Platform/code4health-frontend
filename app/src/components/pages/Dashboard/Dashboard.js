import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProjectsIfNeeded} from '@actions/dashboard'
import {Button, Heading, Paragraph} from '@atoms'
import {FormattedMessage} from 'react-intl'
import PropTypes from 'prop-types'

class Dashboard extends Component {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(fetchProjectsIfNeeded())
  }

  newProject () {
    console.log('new project')
  }

  render () {
    return (
      <div>
        <Heading level={2} icon='projects'>Projects</Heading>
        {this.props.isLoading && <h2>Loading</h2>}
        {this.props.data && this.props.data.length > 0 &&
          <h2>Your operinos</h2>
        }
        {this.props.data &&
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
