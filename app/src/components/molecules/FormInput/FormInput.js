import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Input, Label} from '@atoms'
import {ErrorMessage} from './FormInput.styled.js'

class FormInput extends Component {
  render () {
    return (
      <div>
        <Label>{this.props.label}</Label>

        <Input
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.content}
          onChange={this.props.onChangeHandler}
          onBlur={this.props.onBlurHandler}
          onFocus={this.props.onFocusHandler}
          required={this.props.required}
        />

        {(this.props.touched || this.props.active) && this.props.error &&
          <ErrorMessage>
            {this.props.error}
          </ErrorMessage>
        }

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
  onBlurHandler: PropTypes.func,
  onFocusHandler: PropTypes.func,
  touched: PropTypes.bool,
  active: PropTypes.bool,
  error: PropTypes.any,
  required: PropTypes.bool
}

export default FormInput
