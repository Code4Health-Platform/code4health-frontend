import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSomethingIfNeeded} from '@actions/dashboard'
import PropTypes from 'prop-types'

class Dashboard extends Component {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(fetchSomethingIfNeeded())
  }

  render () {
    const { isLoading } = this.props
    return (
      <div>
        <h1>Dashboard</h1>
        {isLoading && <h2>Loading</h2>}
        {this.props.data}
      </div>
    )
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func,
  isLoading: PropTypes.bool,
  data: PropTypes.string
}

function mapStateToProps (state) {
  return {
    authenticated: state.auth.authenticated,
    data: state.dashboard.data,
    isLoading: state.dashboard.isLoading
  }
}

export default connect(mapStateToProps)(Dashboard)
