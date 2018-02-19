import React from 'react'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTh from '@fortawesome/fontawesome-free-solid/faTh'
import faUserCircle from '@fortawesome/fontawesome-free-solid/faUserCircle'
import faSignOutAlt from '@fortawesome/fontawesome-free-solid/faSignOutAlt'
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle'
import faBan from '@fortawesome/fontawesome-free-solid/faBan'
import faCloud from '@fortawesome/fontawesome-free-solid/faCloud'

const Icon = props => {
  switch (props.icon) {
    case 'logout':
      return (
        <FontAwesomeIcon icon={faSignOutAlt} />
      )
    case 'projects':
      return (
        <FontAwesomeIcon icon={faTh} />
      )
    case 'account':
      return (
        <FontAwesomeIcon icon={faUserCircle} />
      )
    case 'plus':
      return (
        <FontAwesomeIcon icon={faPlusCircle} />
      )
    case 'cancel':
      return (
        <FontAwesomeIcon icon={faBan} />
      )
    case 'cloud':
      return (
        <FontAwesomeIcon icon={faCloud} />
      )
    default:
      return (<div />)
  }
}

Icon.propTypes = {
  icon: PropTypes.string
}

export default Icon
