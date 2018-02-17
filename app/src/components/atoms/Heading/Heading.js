import React from 'react'
import PropTypes from 'prop-types'
import HeadingStyled from './Heading.styled.js'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTh from '@fortawesome/fontawesome-free-solid/faTh'
import faUser from '@fortawesome/fontawesome-free-solid/faUser'

const Icon = (props) => {
  switch (props.icon) {
    case 'projects':
      return (
        <FontAwesomeIcon icon={faTh} />
      )
    case 'account':
      return (
        <FontAwesomeIcon icon={faUser} />
      )
    default:
      return (<div />)
  }
}

const Heading = (props) => (
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

Icon.propTypes = {
  icon: PropTypes.string
}

export default Heading
