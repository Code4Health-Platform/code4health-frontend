import PropTypes from 'prop-types'
import React from 'react'
import StyledForm from './Form.styled.js'

const Form = props => {
  return (
    <StyledForm isLoading={props.isLoading} onSubmit={props.onSubmit}>
      {props.children}
    </StyledForm>
  )
}

Form.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func
}

export default Form
