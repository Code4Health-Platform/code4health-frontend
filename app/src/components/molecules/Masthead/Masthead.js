import PropTypes from 'prop-types'
import React from 'react'
import {StyledMasthead} from './Masthead.styled.js'

const Masthead = props => {
  return (
    <StyledMasthead>
      {props.children}
    </StyledMasthead>
  )
}

Masthead.propTypes = {
  children: PropTypes.node
}

export default Masthead
