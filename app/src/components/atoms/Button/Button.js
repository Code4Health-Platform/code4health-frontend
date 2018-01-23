import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ButtonStyled from './Button.styled.js'

// const Button = props => (
class Button extends Component {
  render () {
    return (
      <ButtonStyled
        type={this.props.type}
        variant={this.props.variant}
        width={this.props.width}
        href={this.props.href}
        clickHandler={this.props.clickHandler}
      >
        {this.props.children}
      </ButtonStyled>
    )
  }
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'muted']),
  width: PropTypes.oneOf(['full', 'auto']),
  href: PropTypes.string,
  clickHandler: PropTypes.func
}

export default Button
