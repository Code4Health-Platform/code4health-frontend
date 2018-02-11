import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Input, Label} from '@atoms'

class FormInput extends Component {
  render () {
    return (
      <div>
        <Label label={this.props.label} />
        <Input
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.content}
          onChange={this.props.onChangeHandler}
          name={this.props.name}
        />
      </div>
    )
  }
}

FormInput.propTypes = {
  type: PropTypes.oneOf(['text', 'password']),
  placeholder: PropTypes.string,
  content: PropTypes.string,
  label: PropTypes.string,
  onChangeHandler: PropTypes.func,
  name: PropTypes.any
}

export default FormInput
