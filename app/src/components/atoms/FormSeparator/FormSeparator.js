import PropTypes from 'prop-types'
import React from 'react'
import {Container, Line, Text} from './FormSeparator.styled.js'

const FormSeparator = props => {
  return (
    <Container>
      <Text>{props.children}</Text>
      <Line />
    </Container>
  )
}

FormSeparator.propTypes = {
  children: PropTypes.node
}

export default FormSeparator
