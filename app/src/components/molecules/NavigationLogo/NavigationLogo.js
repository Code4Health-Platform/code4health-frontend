import React from 'react'
import PropTypes from 'prop-types'
import NavigationLogoStyled from './NavigationLogo.styled.js'
import {Link} from '@atoms'

const NavigationLogo = (props) => (
  <NavigationLogoStyled>
    <Link to={props.href}>
      {props.children}
    </Link>
  </NavigationLogoStyled>
)

NavigationLogo.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string
}

export default NavigationLogo
