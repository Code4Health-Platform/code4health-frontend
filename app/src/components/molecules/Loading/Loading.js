import React from 'react'
import PropTypes from 'prop-types'
import {Container, InnerContainer} from './Loading.styled.js'
import {Heading} from '@atoms'

const Loading = props => (
  <Container>
    <InnerContainer>
      <Heading icon='loading' level={2} spin>{props.text}</Heading>
    </InnerContainer>
  </Container>
)

Loading.propTypes = {
  text: PropTypes.string
}

export default Loading
