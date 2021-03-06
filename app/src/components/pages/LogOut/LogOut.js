import React, {Component} from 'react'
import {logOutAction} from '@actions/auth'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import LogOutTemplate from '@templates/LogOut'

class LogOut extends Component {
  constructor (props) {
    super(props)
    this.logOut = this.logOut.bind(this)
  }

  logOut () {
    this.props.dispatch(logOutAction(this.props.history))
  }

  render () {
    return (
      <LogOutTemplate
        authenticated={this.props.authenticated}
        logOutAction={this.logOut}
      />
    )
  }
}

LogOut.propTypes = {
  authenticated: PropTypes.bool,
  dispatch: PropTypes.func,
  history: PropTypes.object
}

function mapStateToProps (state) {
  return {authenticated: state.auth.authenticated}
}

export default connect(mapStateToProps)(LogOut)
