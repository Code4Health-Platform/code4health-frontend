import React from 'react'
import PropTypes from 'prop-types'
import {ParagraphStyled} from './Paragraph.styled.js'

const Paragraph = props => (
  <ParagraphStyled>
    {props.children}
  </ParagraphStyled>
)

Paragraph.propTypes = {
  children: PropTypes.node
}

export default Paragraph
