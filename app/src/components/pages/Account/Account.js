import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class Account extends Component {
  componentDidMount () {

  }

  render () {
    const { isLoading } = this.props
    return (
      <div>
        <h1>Account</h1>
        {isLoading && <h2>Loading</h2>}
        {this.props.data}
      </div>
    )
  }
}

Account.propTypes = {
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

export default connect(mapStateToProps)(Account)
