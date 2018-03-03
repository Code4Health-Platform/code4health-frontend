import React, {Component} from 'react'
import {Router, Route} from 'react-router-dom'
import AuthRequired from '@components/auth/AuthRequired'
import Layout from '@src/layout'
import {Account, Activate, NewProject, LogIn, LogOut, Projects, SingleProject, SignUp, Welcome, PasswordReset} from '@pages'
import History from '@history'

const AuthenticatedProjects = AuthRequired(Projects)
// const ConnectedProjects = connect()(AuthenticatedProjects)
const AuthenticatedSingleProject = AuthRequired(SingleProject)
// const ConnectedSingleProject = connect()(AuthenticatedSingleProject)
const AuthenticatedNewProject = AuthRequired(NewProject)
// const ConnectedNewProject = connect()(AuthenticatedNewProject)
const AuthenticatedAccount = AuthRequired(Account)
// const ConnectedAccount = connect()(AuthenticatedAccount)

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
          <Route exact path='/account' component={AuthenticatedAccount} />
          <Route exact path='/projects' component={AuthenticatedProjects} />
          <Route exact path='/projects/new' component={AuthenticatedNewProject} />
          <Route path='/projects/:id' component={AuthenticatedSingleProject} />
        </Layout>
      </Router>
    )
  }
}

export default AppRouter
