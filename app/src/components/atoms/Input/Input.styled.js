import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

function BuildInputStyled (type, placeholder, changeHandler, content, name) {
  let styles = `
    width: 100%;
    border-radius: 4px;
    margin: 0;
    padding: 0;
    background-color: #fff;
    justify-content: left;
    padding-left: 0.75em;
    padding-right: 0.75em;
    text-align: left;
    white-space: nowrap;
    -moz-appearance: none;
    -webkit-appearance: none;
    align-items: center;
    border: 1px solid #efefef;
    border-radius: $control-radius;
    box-shadow: none;
    display: inline-flex;
    font-size: $size-normal;
    height: 2.25em;
    line-height: 1.5;
    position: relative;
    color: #333;
    margin-bottom: 1em;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;


    &:hover {

    }
  `

  return styled.input.attrs({
    onChange: changeHandler,
    type: type,
    placeholder: placeholder,
    value: content,
    name: name
  })`${styles}`
}

const InputStyled = (props) => {
  const RenderInput = BuildInputStyled(
    props.type,
    props.placeholder,
    props.changeHandler,
    props.content,
    props.name
  )

  return (
    <RenderInput />
  )
}

InputStyled.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  changeHandler: PropTypes.func,
  content: PropTypes.any,
  name: PropTypes.any
}

export default InputStyled
