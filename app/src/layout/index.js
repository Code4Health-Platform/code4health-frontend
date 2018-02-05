import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Footer, NavigationBar} from '@organisms'
import Container from './styled.js'

class Layout extends Component {
  render () {
    return (
      <div>
        <NavigationBar />
        <Container>
          {this.props.children}
        </Container>
        <Footer />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
