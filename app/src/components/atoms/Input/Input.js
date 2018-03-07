import React from 'react'
import PropTypes from 'prop-types'
import {StyledInput} from './Input.styled.js'

const Input = props => {
  return (
    <StyledInput
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      name={props.name}
      value={props.value}
      required={props.required}
    />
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  name: PropTypes.any,
  value: PropTypes.string,
  required: PropTypes.bool
}

export default Input
