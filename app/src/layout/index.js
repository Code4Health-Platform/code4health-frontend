import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Footer, NavigationBar} from '@organisms'
import Container from './styled.js'
import { withRouter } from 'react-router'

class Layout extends Component {
  render () {
    return (
      <div>
        <NavigationBar location={this.props.location} />
        <Container>
          {this.props.children}
        </Container>
        <Footer />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node,
  route: PropTypes.any,
  location: PropTypes.object
}

export default withRouter(Layout)
