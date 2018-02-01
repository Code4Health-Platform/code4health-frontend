import React from 'react'
import {StyledLink} from './Link.styled.js'
import PropTypes from 'prop-types'

const Link = props => {
  return (
    <StyledLink to={props.to} onClick={props.click}>
      {props.children}
    </StyledLink>
  )
}

Link.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  click: PropTypes.func
}

export default Link
