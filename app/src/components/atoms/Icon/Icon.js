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
import faCheckSquare from '@fortawesome/fontawesome-free-solid/faCheckSquare'
import faDownload from '@fortawesome/fontawesome-free-solid/faDownload'
import faKey from '@fortawesome/fontawesome-free-solid/faKey'
import faCube from '@fortawesome/fontawesome-free-solid/faCube'
import faCubes from '@fortawesome/fontawesome-free-solid/faCubes'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'
import faSync from '@fortawesome/fontawesome-free-solid/faSync'

const Icon = props => {
  switch (props.icon) {
    case 'copy':
      return (
        <FontAwesomeIcon icon={faCopy} spin={props.spin} />
      )
    case 'check':
      return (
        <FontAwesomeIcon icon={faCheckSquare} spin={props.spin} />
      )
    case 'database':
      return (
        <FontAwesomeIcon icon={faDatabase} spin={props.spin} />
      )
    case 'download':
      return (
        <FontAwesomeIcon icon={faDownload} spin={props.spin} />
      )
    case 'key':
      return (
        <FontAwesomeIcon icon={faKey} spin={props.spin} />
      )
    case 'project':
      return (
        <FontAwesomeIcon icon={faCube} spin={props.spin} />
      )
    case 'square':
      return (
        <FontAwesomeIcon icon={faSquare} spin={props.spin} />
      )
    case 'people':
      return (
        <FontAwesomeIcon icon={faUsers} spin={props.spin} />
      )
    case 'delete':
      return (
        <FontAwesomeIcon icon={faTrashAlt} spin={props.spin} />
      )
    case 'eye':
      return (
        <FontAwesomeIcon icon={faEye} spin={props.spin} />
      )
    case 'logout':
      return (
        <FontAwesomeIcon icon={faSignOutAlt} spin={props.spin} />
      )
    case 'grid':
      return (
        <FontAwesomeIcon icon={faTh} spin={props.spin} />
      )
    case 'projects':
      return (
        <FontAwesomeIcon icon={faCubes} spin={props.spin} />
      )
    case 'account':
      return (
        <FontAwesomeIcon icon={faUserCircle} spin={props.spin} />
      )
    case 'plus':
      return (
        <FontAwesomeIcon icon={faPlusCircle} spin={props.spin} />
      )
    case 'search':
      return (
        <FontAwesomeIcon icon={faSearch} spin={props.spin} />
      )
    case 'cancel':
      return (
        <FontAwesomeIcon icon={faBan} spin={props.spin} />
      )
    case 'cloud':
      return (
        <FontAwesomeIcon icon={faCloud} spin={props.spin} />
      )
    case 'success':
      return (
        <FontAwesomeIcon icon={faCheckCircle} spin={props.spin} />
      )
    case 'loading':
      return (
        <FontAwesomeIcon icon={faSync} spin={props.spin} />
      )
    default:
      return (<div spin={props.spin} />)
  }
}

Icon.propTypes = {
  icon: PropTypes.string,
  spin: PropTypes.bool
}

export default Icon
