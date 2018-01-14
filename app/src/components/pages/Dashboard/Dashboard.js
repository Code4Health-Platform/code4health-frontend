import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchSomethingIfNeeded} from '@actions/dashboard'

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
        {JSON.stringify(this.props.data)}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    authenticated: state.auth.authenticated,
    data: state.dashboard.data,
    isLoading: state.dashboard.isLoading
  }
}

export default connect(mapStateToProps)(Dashboard)
