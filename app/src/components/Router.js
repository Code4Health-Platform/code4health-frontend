import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Welcome from '@pages/Welcome'
import LogIn from '@pages/LogIn'
import LogOut from '@pages/LogOut'

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/log-in" component={LogIn} />
          <Route exact path="/log-out" component={LogOut} />
        </Switch>
      </BrowserRouter>
    )
  }
}
