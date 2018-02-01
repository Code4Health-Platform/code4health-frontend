import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

function BuildNavigationMenuStyled (open) {
  return styled.ul`
    list-style-type:none;
    margin: 0.5rem 0 0 0;
    padding: 0;
    width: 100%;
    display: ${open ? 'block' : 'none'};

    @media (min-width: 768px) {
      width: auto;
      display: flex;
      padding: 0;
    }
  `
}

const NavigationMenuStyled = (props) => {
  const RenderMenu = BuildNavigationMenuStyled(
    props.open
  )

  return (
    <RenderMenu>
      {props.children}
    </RenderMenu>
  )
}

NavigationMenuStyled.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool
}

export default NavigationMenuStyled
