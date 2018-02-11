import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'

import AuthRequired from '@components/auth/AuthRequired'
import Layout from '@src/layout'
import {Account, Dashboard, LogIn, LogOut, SignUp, Welcome, PasswordReset} from '@pages'

const AuthenticatedDashboard = AuthRequired(Dashboard)
const ConnectedDashboard = connect()(AuthenticatedDashboard)

const AuthenticatedAccount = AuthRequired(Account)
const ConnectedAccount = connect()(AuthenticatedAccount)

class Router extends Component {
  render () {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/log-in' component={LogIn} />
          <Route exact path='/log-out' component={LogOut} />
          <Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/forgot-password' component={PasswordReset} />
          <Route exact path='/account' component={ConnectedAccount} />
          <Route exact path='/dashboard' component={ConnectedDashboard} />
        </Layout>
      </BrowserRouter>
    )
  }
}

export default connect()(Router)
