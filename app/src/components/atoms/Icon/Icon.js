import React from 'react'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTh from '@fortawesome/fontawesome-free-solid/faTh'
import faUserCircle from '@fortawesome/fontawesome-free-solid/faUserCircle'
import faSignOutAlt from '@fortawesome/fontawesome-free-solid/faSignOutAlt'
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle'
import faBan from '@fortawesome/fontawesome-free-solid/faBan'
import faCloud from '@fortawesome/fontawesome-free-solid/faCloud'
import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt'
import faEye from '@fortawesome/fontawesome-free-solid/faEye'
import faCopy from '@fortawesome/fontawesome-free-solid/faCopy'
import faDatabase from '@fortawesome/fontawesome-free-solid/faDatabase'
import faCheckCircle from '@fortawesome/fontawesome-free-solid/faCheckCircle'
import faSquare from '@fortawesome/fontawesome-free-solid/faSquare'
import faUsers from '@fortawesome/fontawesome-free-solid/faUsers'

const Icon = props => {
  switch (props.icon) {
    case 'copy':
      return (
        <FontAwesomeIcon icon={faCopy} />
      )
    case 'database':
      return (
        <FontAwesomeIcon icon={faDatabase} />
      )
    case 'square':
      return (
        <FontAwesomeIcon icon={faSquare} />
      )
    case 'people':
      return (
        <FontAwesomeIcon icon={faUsers} />
      )
    case 'delete':
      return (
        <FontAwesomeIcon icon={faTrashAlt} />
      )
    case 'eye':
      return (
        <FontAwesomeIcon icon={faEye} />
      )
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
    case 'success':
      return (
        <FontAwesomeIcon icon={faCheckCircle} />
      )
    default:
      return (<div />)
  }
}

Icon.propTypes = {
  icon: PropTypes.string
}

export default Icon
