import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {IntlProvider} from 'react-intl'
import * as Localisation from '@i18n'

export class I18nProvider extends Component {
  constructor (props) {
    super(props)
    Localisation.configureLocales()
  }

  render () {
    return (
      <IntlProvider
        locale={this.props.locale.lang}
        messages={Localisation.flattenMessages(this.props.locale.messages)}
        key={this.props.locale.lang}
      >
        {this.props.children}
      </IntlProvider>
    )
  }
}

I18nProvider.propTypes = {
  locale: PropTypes.object,
  messages: PropTypes.object,
  children: PropTypes.element.isRequired
}

function mapStateToProps (state) {
  return {
    locale: state.locale
  }
}

export default connect(mapStateToProps)(I18nProvider)
