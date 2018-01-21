import React from 'react'
import {StyledLogo} from './Logo.styled.js'
import PropTypes from 'prop-types'

const Logo = props => {
  return (
    <StyledLogo to={props.href}>
      {props.children}
    </StyledLogo>
  )
}

Logo.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string
}

export default Logo
