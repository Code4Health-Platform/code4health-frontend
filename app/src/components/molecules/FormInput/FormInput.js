import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Input, Label} from '@atoms'

class FormInput extends Component {
  render () {
    return (
      <div>
        <Label label={this.props.label} />
        <Input
          type={this.props.type} placeholder={this.props.placeholder}
          value={this.props.inputValue}
        />
      </div>
    )
  }
}

FormInput.propTypes = {
  type: PropTypes.oneOf(['text', 'password']),
  placeholder: PropTypes.string,
  inputValue: PropTypes.string,
  label: PropTypes.string
}

export default FormInput
