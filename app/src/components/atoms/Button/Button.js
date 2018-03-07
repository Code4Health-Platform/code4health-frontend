import React from 'react'
import PropTypes from 'prop-types'
import ButtonStyled from './Button.styled.js'
import Icon from '@atoms/Icon'

const Button = props => (
  <ButtonStyled
    type={props.type}
    variant={props.variant}
    width={props.width}
    href={props.href}
    onClick={() => props.onClick}
    disabled={props.disabled}
  >
    <Icon icon={props.icon} />
    {props.children}
  </ButtonStyled>
)

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'muted', 'danger']),
  width: PropTypes.oneOf(['full', 'auto']),
  href: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  disabled: PropTypes.bool
}

export default Button
