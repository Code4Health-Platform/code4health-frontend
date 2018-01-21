import React from 'react'
import PropTypes from 'prop-types'
import {Footer, NavigationBar} from '@organisms'
import Container from './Layout.styled.js'

const Layout = props => (
  <div>
    <NavigationBar />
    <Container>
      {props.children}
    </Container>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
