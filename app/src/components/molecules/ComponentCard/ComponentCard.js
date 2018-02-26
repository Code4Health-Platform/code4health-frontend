import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ButtonContainer, Container, DescriptionContainer, InnerContainer} from './ComponentCard.styled.js'
import {Button, Heading} from '@atoms'
import {FormattedMessage} from 'react-intl'

class ComponentCard extends Component {
  getIcon (component) {
    switch (component) {
      case 'cdr':
        return 'database'
      case 'demographics':
        return 'people'
      default:
        return 'square'
    }
  }

  render () {
    return (
      <Container id={this.props.id}>
        <InnerContainer>
          <Heading
            level={3}
            icon={this.getIcon(this.props.type)}
          >
            {this.props.type}
          </Heading>

          <DescriptionContainer>
            <FormattedMessage
              id={`components.${this.props.type}.description`} />
          </DescriptionContainer>

          <ButtonContainer>
            <Button>Active</Button>

            <Button variant='danger'>Delete</Button>
          </ButtonContainer>
        </InnerContainer>
      </Container>
    )
  }
}

ComponentCard.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  available: PropTypes.bool
}

export default ComponentCard
