import React from 'react'
import PropTypes from 'prop-types'

const Heading = (props) => (
  <h1>{props.children}</h1>
)

Heading.propTypes = {
  children: PropTypes.node
}

export default Heading
