/* @todo - this component is doing far too much - refactor */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {IntlProvider, addLocaleData} from 'react-intl'
import {Footer, NavigationBar} from '@organisms'
import Container from './Layout.styled.js'
import {flattenMessages} from '@i18n'

import en from 'react-intl/locale-data/en'
import se from 'react-intl/locale-data/se'

addLocaleData([...en, ...se])

class Layout extends Component {
  render () {
    return (
      <IntlProvider locale={this.props.locale} messages={flattenMessages(this.props.messages)} key={this.props.locale}>
        <div>
          <NavigationBar />
          <Container>
            {this.props.children}
          </Container>
          <Footer />
        </div>
      </IntlProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node,
  locale: PropTypes.string,
  messages: PropTypes.object
}

function mapStateToProps (state) {
  const { lang, messages } = state.locale
  return { locale: lang, key: lang, messages }
}

export default connect(mapStateToProps)(Layout)
