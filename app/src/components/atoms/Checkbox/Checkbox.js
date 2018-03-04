import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Container, StyledCheckbox, StyledLabel} from './Checkbox.styled.js'
import {Icon} from '@atoms'

class Checkbox extends Component {
  constructor (props) {
    super(props)

    this.state = {
      checked: props.checked || false
    }
    this.toggleCheck = this.toggleCheck.bind(this)
  }

  toggleCheck () {
    this.setState({checked: !this.state.checked})
  }

  render () {
    return (
      <Container>
        <StyledCheckbox
          id={`checkbox-${this.props.id}`}
          styled='checkbox'
          checked={this.state.checked}
          onChange={this.toggleCheck}
        />

        <StyledLabel htmlFor={`checkbox-${this.props.id}`}>
          {this.state.checked && <Icon icon='check' />}
          {!this.state.checked && <Icon icon='square' />}
          {this.props.children}
        </StyledLabel>
      </Container>
    )
  }
}

Checkbox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.number,
  checked: PropTypes.bool
}

export default Checkbox
