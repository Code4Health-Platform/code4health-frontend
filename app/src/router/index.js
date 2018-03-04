import React, {Component} from 'react'
import {Router, Route} from 'react-router-dom'
import AuthRequired from './AuthRequired'
import Layout from '@src/layout'
import {Account, Activate, NewProject, LogIn, LogOut, Projects, SingleProject, SignUp, Welcome, PasswordReset} from '@pages'
import History from '@history'

const AuthenticatedProjects = AuthRequired(Projects)
const AuthenticatedSingleProject = AuthRequired(SingleProject)
const AuthenticatedNewProject = AuthRequired(NewProject)
const AuthenticatedAccount = AuthRequired(Account)
const AuthenticatedLogOut = AuthRequired(LogOut)

class AppRouter extends Component {
  render () {
    return (
      <Router history={History}>
        <Layout>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/activate' component={Activate} />
          <Route exact path='/log-in' component={LogIn} />
          <Route exact path='/log-out' component={AuthenticatedLogOut} />
          <Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/forgot-password' component={PasswordReset} />
          <Route exact path='/account' component={AuthenticatedAccount} />
          <Route exact path='/projects' component={AuthenticatedProjects} />
          <Route exact path='/projects/new' component={AuthenticatedNewProject} />
          <Route path='/projects/:id(\d+)' component={AuthenticatedSingleProject} />
        </Layout>
      </Router>
    )
  }
}

export default AppRouter
