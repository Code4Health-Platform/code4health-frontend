import PropTypes from 'prop-types'
import React from 'react'
import {StyledAlert, StyledIcon, StyledMessage} from './Alert.styled.js'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faExclamationCircle from '@fortawesome/fontawesome-free-solid/faExclamationCircle'
import faInfoCircle from '@fortawesome/fontawesome-free-solid/faInfoCircle'
import faCheckCircle from '@fortawesome/fontawesome-free-solid/faCheckCircle'

const Icon = props => {
  const size='1x'
  const color='#333'

  switch (props.type) {
    case 'info':
      return (
        <FontAwesomeIcon icon={faInfoCircle} size={size} color={color} />
      )
    case 'warning':
      return (
        <FontAwesomeIcon icon={faExclamationCircle} size={size} color={color} />
      )
    case 'success':
      return (
        <FontAwesomeIcon icon={faCheckCircle} size={size} color={color} />
      )
  }
}

const Alert = props => {
  if (!props.message) {
    return (<div />)
  } else {
    return (
      <StyledAlert>
        <StyledIcon>
          <Icon type={props.type} />
        </StyledIcon>
        <StyledMessage>
          {props.message}
        </StyledMessage>
      </StyledAlert>
    )
  }
}

Alert.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(['info', 'error'])
}

Icon.propTypes = {
  type: PropTypes.oneOf(['info', 'error'])
}

export default Alert
