import React from 'react'
import PropTypes from 'prop-types'
import NavigationItemStyled from './NavigationItem.styled.js'
import {Link} from '@atoms'

const NavigationItem = (props) => (
  <NavigationItemStyled type={props.type}>
    <Link to={props.href} click={props.click}>
      {props.children}
    </Link>
  </NavigationItemStyled>
)

NavigationItem.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['link', 'button']),
  href: PropTypes.string,
  click: PropTypes.func
}

export default NavigationItem
