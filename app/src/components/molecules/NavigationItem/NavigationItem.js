import React from 'react'
import PropTypes from 'prop-types'
import NavigationItemStyled from './NavigationItem.styled.js'

const NavigationItem = (props) => (
  <NavigationItemStyled type={props.type} href={props.href}>
    {props.children}
  </NavigationItemStyled>
)

NavigationItem.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['button', 'link', 'text', 'logo']),
  href: PropTypes.string
}

export default NavigationItem
