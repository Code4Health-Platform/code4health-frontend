import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Colors from '@theme/colors'

const StyledAlert = props => {
  let backgroundColor = '#eee'

  switch (props.type) {
    case 'success':
      backgroundColor = Colors.success
      break
    case 'error':
      backgroundColor = Colors.error
      break
  }

  const StyledDiv = styled.div`
    background-color: ${backgroundColor};
    border-radius: 4px;
    margin: 1rem 0;
    display: flex;
    align-items: center;
  `

  return (
    <StyledDiv>
      {props.children}
    </StyledDiv>
  )
}

StyledAlert.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string
}

const StyledIcon = styled.div`
  padding: 1rem;
  svg {
    color: #fff;
  }
`

const StyledMessage = styled.div`
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: normal;
  color: #fff;
`

export {StyledAlert, StyledIcon, StyledMessage}
