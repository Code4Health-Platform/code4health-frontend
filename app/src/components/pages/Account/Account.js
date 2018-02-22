import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Heading} from '@atoms'

class Account extends Component {
  componentDidMount () {
  }

  render () {
    const { isLoading } = this.props
    return (
      <div>
        <Heading level={2} icon='account'>Account</Heading>
        {isLoading &&
          <Heading level={2}>Loading</Heading>
        }
        {JSON.stringify(this.props.data)}
      </div>
    )
  }
}

Account.propTypes = {
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

export default connect(mapStateToProps)(Account)
