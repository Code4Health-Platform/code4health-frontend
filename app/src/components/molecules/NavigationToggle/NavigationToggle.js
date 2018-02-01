import React from 'react'
import PropTypes from 'prop-types'
import {NavigationToggleStyled} from './NavigationToggle.styled.js'

const NavigationToggle = (props) => (
  <NavigationToggleStyled onClick={props.clickHandler}>
    <span />
    <span />
    <span />
  </NavigationToggleStyled>
)

NavigationToggle.propTypes = {
  clickHandler: PropTypes.func
}

export default NavigationToggle
