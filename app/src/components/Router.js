import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import NavigationBar from '@organisms/NavigationBar'
import Welcome from '@pages/Welcome'
import LogIn from '@pages/LogIn'
import LogOut from '@pages/LogOut'

import AuthRequired from '@components/auth/AuthRequired'

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <NavigationBar />
          <Route exact path="/" component={Welcome} />
          <Route exact path="/log-in" component={LogIn} />
          <Route exact path="/log-out" component={LogOut} />
          <Route exact path="/secret" component={AuthRequired(Welcome)} />
        </Switch>
      </BrowserRouter>
    )
  }
}
