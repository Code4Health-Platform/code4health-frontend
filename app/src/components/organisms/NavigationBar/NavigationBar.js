import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class NavigationBar extends Component {
  render () {
    return (
      <nav>
        <Link to={`/`}>code4health</Link>
        <Link to={`/dashboard`}>dashboard</Link>
        <hr />
        <Link to={`/log-in`}>log in</Link>
        <Link to={`/log-out`}>log out</Link>
        <Link to={`/sign-up`}>sign up</Link>
        <hr />
      </nav>
    )
  }
}

export default NavigationBar
