import React from 'react'
import PropTypes from 'prop-types'
import HeadingStyled from './Heading.styled.js'
import Icon from '@atoms/Icon'

const Heading = props => (
  <HeadingStyled level={props.level}>
    <Icon icon={props.icon} />
    {props.children}
  </HeadingStyled>
)

Heading.propTypes = {
  children: PropTypes.node,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  icon: PropTypes.string
}

export default Heading
