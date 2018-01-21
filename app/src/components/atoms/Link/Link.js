import React from 'react'
import {StyledLink} from './Link.styled.js'
import PropTypes from 'prop-types'

const Link = props => {
  return (
    <StyledLink to={props.to}>
      {props.children}
    </StyledLink>
  )
}

Link.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string
}

export default Link
