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
      name={props.name}
      value={props.value}
    />
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.any,
  value: PropTypes.string
}

export default Input
