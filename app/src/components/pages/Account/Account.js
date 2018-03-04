import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {getAccountDetails, updateAccountDetails, changePassword, accountUnload} from '@actions/account'
import AccountTemplate from '@templates/Account'

class Account extends Component {
  constructor (props) {
    super(props)
    this.submitAccountDetailsFormHandler= this.submitAccountDetailsFormHandler.bind(this)
    this.changePasswordFormHandler= this.changePasswordFormHandler.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(getAccountDetails())
  }

  componentWillUnmount () {
    this.props.dispatch(accountUnload())
  }

  submitAccountDetailsFormHandler (values) {
    this.props.updateAccountDetails(values)
  }

  changePasswordFormHandler (values) {
    this.props.changePassword(values)
  }

  render () {
    return (
      <AccountTemplate {...this.props}
        accountDetailsFormHandler={this.submitAccountDetailsFormHandler}
        changePasswordFormHandler={this.changePasswordFormHandler}
      />
    )
  }
}

Account.propTypes = {
  account: PropTypes.object,
  dispatch: PropTypes.func,
  isLoading: PropTypes.bool,
  projects: PropTypes.any,
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string,
  updateAccountDetails: PropTypes.func,
  changePassword: PropTypes.func
}

function mapStateToProps (state) {
  return {
    accountDetails: state.account.accountDetails,
    authenticated: state.auth.authenticated,
    isLoading: state.account.isLoading
  }
}

export default connect(mapStateToProps, {getAccountDetails, updateAccountDetails, changePassword, accountUnload})(Account)
