import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router, Route} from 'react-router-dom'
import AuthRequired from '@components/auth/AuthRequired'
import Layout from '@src/layout'
import {Account, Activate, Dashboard, NewProject, LogIn, LogOut, SignUp, Welcome, PasswordReset} from '@pages'
import History from '@history'

const AuthenticatedDashboard = AuthRequired(Dashboard)
const ConnectedDashboard = connect()(AuthenticatedDashboard)

const AuthenticatedNewProject = AuthRequired(NewProject)
const ConnectedNewProject = connect()(AuthenticatedNewProject)

const AuthenticatedAccount = AuthRequired(Account)
const ConnectedAccount = connect()(AuthenticatedAccount)

class AppRouter extends Component {
  render () {
    return (
      <Router history={History}>
        <Layout>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/activate' component={Activate} />
          <Route exact path='/log-in' component={LogIn} />
          <Route exact path='/log-out' component={LogOut} />
          <Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/forgot-password' component={PasswordReset} />
          <Route exact path='/account' component={ConnectedAccount} />
          <Route exact path='/projects' component={ConnectedDashboard} />
          <Route exact path='/projects/new' component={ConnectedNewProject} />
        </Layout>
      </Router>
    )
  }
}

export default AppRouter
