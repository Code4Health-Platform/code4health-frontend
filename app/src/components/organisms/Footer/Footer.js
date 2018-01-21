import React, { Component } from 'react'
import {Container, StyledFooter} from './Footer.styled.js'
import {Paragraph} from '@atoms'

class Footer extends Component {
  render () {
    return (
      <StyledFooter>
        <Container>
          <Paragraph>
            Code4Health & C4H are registered Trademarks of the Apperta Foundation CIC 2016.
          </Paragraph>
        </Container>
      </StyledFooter>
    )
  }
}

export default Footer
