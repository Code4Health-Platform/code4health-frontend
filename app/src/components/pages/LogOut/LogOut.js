import React, { Component } from 'react'
import { logOutAction } from '@actions/auth'
import { connect } from 'react-redux'

class LogOut extends Component {
  logOut () {
    console.log('log out called')
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
      return (<h1>Logged out</h1>)
    }
  }
}

function mapStateToProps (state) {
  return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps, {logOutAction})(LogOut)
