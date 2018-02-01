import React from 'react'
import PropTypes from 'prop-types'
import NavigationMenuStyled from './NavigationMenu.styled.js'

const NavigationMenu = (props) => (
  <NavigationMenuStyled open={props.open}>
    {props.children}
  </NavigationMenuStyled>
)

NavigationMenu.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool
}

export default NavigationMenu
