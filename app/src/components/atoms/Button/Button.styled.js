import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function BuildButtonStyled (width, variant, href, type, clickHandler) {
  let styles = `
    width: ${width === 'auto' ? 'auto' : '100%'};
    border-radius: 4px;
    margin: 0 0 1rem 0;
    padding: 0;
    background-color: ${variant === 'muted' ? 'white' : '#3273dc'};
    cursor: pointer;
    justify-content: center;
    text-align: center;
    white-space: nowrap;
    -moz-appearance: none;
    -webkit-appearance: none;
    align-items: center;
    border: 1px solid transparent;
    border-radius: $control-radius;
    box-shadow: none;
    display: inline-flex;
    font-size: $size-normal;
    line-height: 1.5;
    position: relative;
    color: ${variant === 'muted' ? '#363636' : '#fff'};
    text-decoration: ${variant === 'muted' ? 'underline' : 'none'};
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0.5rem;

    &:hover {
      background-color: ${variant === 'muted' ? '#f5f5f5' : '#276cda'};
    }

    svg {
      margin: 0 0.5rem 0 0;
    }
  `

  if (href) {
    return styled(Link).attrs({
      'to': href
    })`${styles}`
  }

  return styled.button.attrs({
    'type': type,
    'onClick': clickHandler
  })`${styles}`
}

const ButtonStyled = (props) => {
  const RenderButton = BuildButtonStyled(
    props.width,
    props.variant,
    props.href,
    props.type,
    props.clickHandler
  )

  return (
    <RenderButton>
      {props.children}
    </RenderButton>
  )
}

ButtonStyled.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  width: PropTypes.string,
  clickHandler: PropTypes.func
}

export default ButtonStyled
