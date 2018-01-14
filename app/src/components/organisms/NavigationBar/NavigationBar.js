import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class NavigationBar extends Component {
  render () {
    return (
      <nav>
        <Link to={`/`}>code4health</Link>
        {this.props.authenticated && <Link to={`/dashboard`}>dashboard</Link>}
        <hr />
        {this.props.authenticated && <Link to={`/account`}>account</Link>}
        {!this.props.authenticated && <Link to={`/log-in`}>log in</Link>}
        {this.props.authenticated && <Link to={`/log-out`}>log out</Link>}
        {!this.props.authenticated && <Link to={`/sign-up`}>sign up</Link>}
        <hr />
      </nav>
    )
  }
}

NavigationBar.propTypes = {
  authenticated: PropTypes.bool
}

function mapStateToProps (state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(NavigationBar)
