import React, { Component } from 'react'
import {connect} from 'react-redux'
import {switchLocale} from '@actions/Locale'
import PropTypes from 'prop-types'

class LocaleSwitcher extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.props.switchLocale(event.target.value)
  }

  render () {
    return (
      <select
        onChange={this.handleChange}
        value={this.props.locale}
      >
        <option value='en_gb'>English (UK)</option>
        <option value='en_us'>English (US)</option>
      </select>
    )
  }
}

LocaleSwitcher.propTypes = {
  locale: PropTypes.string,
  switchLocale: PropTypes.func
}

function mapStateToProps (state) {
  return {
    locale: state.locale
  }
}

export default connect(
  mapStateToProps,
  {switchLocale}
)(LocaleSwitcher)
