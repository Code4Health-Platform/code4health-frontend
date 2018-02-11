import React, {Component} from 'react'
import {connect} from 'react-redux'
import {activateAccount} from '@actions/auth'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import {FormattedMessage} from 'react-intl'
import {Heading, Link, Paragraph} from '@atoms'

class Activate extends Component {
  componentDidMount () {
    const key = queryString.parse(this.props.location.search).key
    const {dispatch} = this.props
    dispatch(activateAccount(key))
  }

  render () {
    return (
      <div>
        <Heading><FormattedMessage id='auth.activate.title' /></Heading>

        {this.props.error &&
          <Paragraph>{this.props.errorMessage}</Paragraph>
        }

        {this.props.success &&
          <div>
            <Paragraph>
              <FormattedMessage id='auth.activate.success' />
            </Paragraph>
            <Link to={`/log-in`}><FormattedMessage id='auth.logIn.cta' /></Link>
          </div>
        }

        {this.props.loading && <Paragraph>loading</Paragraph>}
      </div>
    )
  }
}

Activate.propTypes = {
  dispatch: PropTypes.func,
  location: PropTypes.object,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  loading: PropTypes.bool,
  success: PropTypes.bool
}

function mapStateToProps (state) {
  return {
    authenticated: state.auth.authenticated,
    data: state.auth.data,
    error: state.auth.error,
    errorMessage: state.auth.errorMessage,
    loading: state.auth.loading,
    success: state.auth.activation_successful
  }
}

export default connect(mapStateToProps)(Activate)
