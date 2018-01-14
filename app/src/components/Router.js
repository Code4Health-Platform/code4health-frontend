import React, {Component} from 'react'
import { connect } from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'

import AuthRequired from '@components/auth/AuthRequired'
import Footer from '@organisms/Footer'
import NavigationBar from '@organisms/NavigationBar'
import Welcome from '@pages/Welcome'
import Dashboard from '@pages/Dashboard'
import LogIn from '@pages/LogIn'
import LogOut from '@pages/LogOut'
import SignUp from '@pages/SignUp'

const AuthenticatedDashboard = AuthRequired(Dashboard)
const ConnectedDashboard = connect()(AuthenticatedDashboard)

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <NavigationBar />
          <Route exact path="/" component={Welcome} />
          <Route exact path="/log-in" component={LogIn} />
          <Route exact path="/log-out" component={LogOut} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/dashboard" component={ConnectedDashboard} />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}
