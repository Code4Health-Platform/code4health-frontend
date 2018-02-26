import PropTypes from 'prop-types'
import React from 'react'
import StyledLabel from './Label.styled.js'

const Label = props => {
  return (
    <StyledLabel>
      {props.children}
    </StyledLabel>
  )
}

Label.propTypes = {
  children: PropTypes.node
}

export default Label
