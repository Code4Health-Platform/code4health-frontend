import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function BuildListItemStyled (type, active) {
  let styles = `
    margin: 0;
    display: -webkit-flex;
    -webkit-align-items: center;
    display: flex;
    align-items: center;

    @media (min-width: 468px) {
      margin: 1rem;
    }

    svg {
      margin-right: 0.5em;
    }

    a, a:active, a:visited {
      padding: 0.5rem 1rem;
      display: -webkit-flex;
      -webkit-align-items: center;
      align-items: center;
      justify-content: ${type === 'link' ? 'left' : 'center'};
      display: flex;
      margin: ${type === 'link' ? '0' : '0.5rem'};
      border-radius: ${type === 'link' ? '0' : '4px'};
      text-align: ${type === 'link' ? 'left' : 'center'};
      text-decoration: none;
      width: 100%;
      background-color: ${type === 'link' ? 'white' : '#3273dc'};
      color: ${type === 'link' ? '#363636' : 'white'};
      border-radius: ${type === 'link' ? '0' : '4px'};
      ${active ? 'color: #276cda' : ''};
    }

    a:hover {
      color: ${type === 'link' ? '#276cda' : 'white'};
      background-color: ${type === 'link' ? 'transparent' : '#276cda'};
      ${active ? 'background-color: transparent;' : ''}
    }

    @media (min-width: 768px) {
      margin: 0 1rem;

      a:hover {
        background-color: ${type === 'link' ? 'transparent' : '#276cda'};
        ${active ? 'background-color: transparent;' : ''}
      }
    }
  `
  return styled.li`${styles}`
}

const NavigationItemStyled = (props) => {
  const RenderListItem = BuildListItemStyled(
    props.type,
    props.active
  )

  return (
    <RenderListItem>
      {props.children}
    </RenderListItem>
  )
}

NavigationItemStyled.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['link', 'button']),
  active: PropTypes.bool
}

export default NavigationItemStyled
