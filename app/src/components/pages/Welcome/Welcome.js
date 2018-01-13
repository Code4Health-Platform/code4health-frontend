import React from 'react'
import {Link} from 'react-router-dom'

export const Welcome = (props) => (
  <div>
    <h1>Welcome to code4health</h1>
    <Link to={`/log-in`}>log in</Link>
  </div>
)

Welcome.propTypes = {
}

export default Welcome
