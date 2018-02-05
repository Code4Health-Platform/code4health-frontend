import React, { Component } from 'react'
import {connect} from 'react-redux'
import {switchLocale} from '@actions/locale'
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
        value={this.props.locale.lang}
      >
        <option value='en'>English</option>
        <option value='se'>Svenska</option>
      </select>
    )
  }
}

LocaleSwitcher.propTypes = {
  locale: PropTypes.object,
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
