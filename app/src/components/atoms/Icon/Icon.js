import React from 'react'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTh from '@fortawesome/fontawesome-free-solid/faTh'
import faUser from '@fortawesome/fontawesome-free-solid/faUser'
import faSignOutAlt from '@fortawesome/fontawesome-free-solid/faSignOutAlt'
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle'

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
        <FontAwesomeIcon icon={faUser} />
      )
    case 'plus':
      return (
        <FontAwesomeIcon icon={faPlusCircle} />
      )
    default:
      return (<div />)
  }
}

Icon.propTypes = {
  icon: PropTypes.string
}

export default Icon
