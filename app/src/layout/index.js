/* @todo - this component is doing far too much - refactor */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {IntlProvider} from 'react-intl'
import {Footer, NavigationBar} from '@organisms'
import Container from './styled.js'
import * as Localisation from '@i18n'

class Layout extends Component {
  constructor (props) {
    Localisation.configureLocales()
    super(props)
  }

  render () {
    return (
      <IntlProvider locale={this.props.locale} messages={Localisation.flattenMessages(this.props.messages)} key={this.props.locale}>
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
