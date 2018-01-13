import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class NavigationBar extends Component {
  render () {
    return (
      <nav>
        <Link to={`/`}>code4health</Link>
        <hr />
        <Link to={`/log-in`}>log in</Link>
        <Link to={`/log-out`}>log out</Link>
        <hr />
      </nav>
    )
  }
}

export default NavigationBar
