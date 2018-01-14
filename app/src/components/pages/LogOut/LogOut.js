import React, { Component } from 'react'
import { logOutAction } from '@actions/auth'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class LogOut extends Component {
  logOut () {
    this.props.logOutAction(this.props.history)
  }

  render () {
    if (this.props.authenticated) {
      return (
        <div>
          <h1>Are you sure you want to log out?</h1>
          <button onClick={() => this.logOut()}>Log Out</button>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Logged out</h1>
          <Link to={`/log-in`}>log in</Link>
        </div>
      )
    }
  }
}

LogOut.propTypes = {
  authenticated: PropTypes.bool,
  history: PropTypes.object,
  logOutAction: PropTypes.func
}

function mapStateToProps (state) {
  return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps, {logOutAction})(LogOut)
