import React, {Component} from 'react'
import {logOutAction} from '@actions/auth'
import {Button, Paragraph} from '@atoms'
import {connect} from 'react-redux'
import Link from '@atoms/Link'
import PropTypes from 'prop-types'

class LogOut extends Component {
  constructor (props) {
    super(props)
    this.logOut = this.logOut.bind(this)
  }

  logOut () {
    this.props.logOutAction(this.props.history)
  }

  render () {
    if (this.props.authenticated) {
      return (
        <div>
          <Paragraph>Are you sure you want to log out?</Paragraph>
          <Button
            type='button'
            clickHandler={() => this.logOut}
            width='auto'
          >
            Log Out
          </Button>
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
