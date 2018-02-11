import PropTypes from 'prop-types'
import React from 'react'
import StyledLabel from './Label.styled.js'

const Label = props => {
  return (
    <StyledLabel>
      {props.label}
    </StyledLabel>
  )
}

Label.propTypes = {
  label: PropTypes.string.isRequired
}

export default Label
