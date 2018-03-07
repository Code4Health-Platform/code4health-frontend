import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function BuildButtonStyled (width, variant, href, type, onClick, disabled) {
  const backgroundColor = (() => {
    switch (variant) {
      case 'danger': { return '#ff3860' }
      case 'muted': { return 'white' }
      default: { return '#3273dc' }
    }
  })()

  const backgroundColorHover = (() => {
    switch (variant) {
      case 'danger': { return '#E93257' }
      case 'muted': { return '#f5f5f5' }
      default: { return '#276cda' }
    }
  })()

  let styles = `
    font-family: 'Source Sans Pro', -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    font-weight: 600;
    width: ${width === 'auto' ? 'auto' : '100%'};
    border-radius: 4px;
    margin: 0 0 1rem 0;
    margin-right: ${width === 'auto' ? '1rem' : '0'};
    padding: 0;
    background-color: ${backgroundColor};
    cursor: pointer;
    justify-content: center;
    text-align: center;
    white-space: nowrap;
    -moz-appearance: none;
    -webkit-appearance: none;
    align-items: center;
    border: 1px solid transparent;
    box-shadow: none;
    display: ${width === 'auto' ? 'inline-block' : 'block'};
    font-size: 1.6rem;
    line-height: 1.5;
    position: relative;
    color: ${variant === 'muted' ? '#363636' : '#fff'};
    text-decoration: ${variant === 'muted' ? 'underline' : 'none'};
    box-sizing: border-box;
    padding: 0.5rem;

    &:hover {
      background-color: ${backgroundColorHover};
    }

    &:disabled, &[disabled] {
      opacity: 0.3;
      cursor: not-allowed;

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
    'onClick': onClick,
    'disabled': disabled
  })`${styles}`
}

const ButtonStyled = (props) => {
  const RenderButton = BuildButtonStyled(
    props.width,
    props.variant,
    props.href,
    props.type,
    props.onClick,
    props.disabled
  )

  return (
    <RenderButton >
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
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}

export default ButtonStyled
