import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

function BuildNavigationMenuStyled (open) {
  return styled.ul`
    list-style-type:none;
    margin: 0;
    padding: 0;
    width: 100%;
    display: ${open ? 'block' : 'none'};
    margin-top: ${open ? '1rem' : '0'};

    @media (min-width: 768px) {
      width: auto;
      display: flex;
      padding: 0;
      margin-top: 0;
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
