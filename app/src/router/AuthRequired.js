import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export default function (ComposedComponent) {
  class Authentication extends Component {
    componentWillMount () {
      if (!this.props.authenticated) {
        this.props.history.push('/log-in')
      }
    }

    componentWillUpdate (nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/log-in')
      }
    }

    render () {
      return <ComposedComponent {...this.props} />
    }
  }

  Authentication.propTypes = {
    router: PropTypes.object,
    authenticated: PropTypes.bool,
    history: PropTypes.object
  }

  function mapStateToProps (state) {
    return { authenticated: state.auth.authenticated }
  }

  return connect(mapStateToProps)(Authentication)
}
