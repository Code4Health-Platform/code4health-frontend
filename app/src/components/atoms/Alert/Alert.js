import PropTypes from 'prop-types'
import React from 'react'
import {FormattedMessage} from 'react-intl'
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
    case 'error':
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
      <StyledAlert type={props.type}>
        <StyledIcon><Icon type={props.type} /></StyledIcon>
        <StyledMessage>
          <FormattedMessage id={props.message} />
        </StyledMessage>
      </StyledAlert>
    )
  }
}

Alert.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(['info', 'error', 'success'])
}

Icon.propTypes = {
  type: PropTypes.oneOf(['info', 'error', 'success'])
}

export default Alert
