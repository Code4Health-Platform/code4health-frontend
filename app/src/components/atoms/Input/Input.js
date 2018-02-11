import React from 'react'
import PropTypes from 'prop-types'
import StyledInput from './Input.styled.js'

const Input = props => {
  return (
    <StyledInput
      type={props.type}
      placeholder={props.placeholder}
      value={props.content}
      onChange={props.onChangeHandler}
      name={props.name}
    />
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']),
  onChangeHandler: PropTypes.func,
  content: PropTypes.any,
  name: PropTypes.any
}

export default Input
