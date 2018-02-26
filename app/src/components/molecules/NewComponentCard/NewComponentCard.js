import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Container, InnerContainer} from './NewComponentCard.styled.js'
import {Heading, Link} from '@atoms'

class NewComponentCard extends Component {
  render () {
    return (
      <Container id={this.props.id}>
        <InnerContainer>
          <Link to='/'>
            <Heading level={3} icon='plus'>
              Add Component
            </Heading>
          </Link>
        </InnerContainer>
      </Container>
    )
  }
}

NewComponentCard.propTypes = {
  id: PropTypes.number
}

export default NewComponentCard
