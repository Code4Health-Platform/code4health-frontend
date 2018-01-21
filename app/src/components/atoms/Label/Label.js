import PropTypes from 'prop-types'
import React from 'react'

const Label = props => {
  return (
    <label>
      {props.label}
    </label>
  )
}

Label.propTypes = {
  label: PropTypes.string.isRequired
}

export default Label
