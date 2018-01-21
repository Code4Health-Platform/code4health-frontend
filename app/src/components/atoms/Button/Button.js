import React from 'react'
import PropTypes from 'prop-types'
import ButtonStyled from './Button.styled.js'

const Button = props => (
  <ButtonStyled
    type={props.type}
    variant={props.variant}
    width={props.width}
    href={props.href}
  >
    {props.children}
  </ButtonStyled>
)

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'muted']),
  width: PropTypes.oneOf(['full', 'auto']),
  href: PropTypes.string
}

export default Button
