import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Box} from 'grid-styled'
import {Nav, Container} from './NavigationBar.styled.js'
import {NavigationItem} from '@molecules'

class NavigationBar extends Component {
  render () {
    return (
      <Nav>
        <Container align='center' is='nav'>
          <NavigationItem type='logo' href='/'>
            Code4Health
            <span>&trade;</span>
          </NavigationItem>

          {this.props.authenticated &&
            <NavigationItem type='link' href='/dashboard'>
              dashboard
            </NavigationItem>
          }

          <Box m='auto' />

          {this.props.authenticated &&
            <NavigationItem type='link' href='/account'>
              account
            </NavigationItem>
          }

          {this.props.authenticated &&
            <NavigationItem type='link' href='/log-out'>
              log out
            </NavigationItem>
          }

          {!this.props.authenticated &&
            <NavigationItem type='link' href='/log-in'>
              log in
            </NavigationItem>
          }

          {!this.props.authenticated &&
            <NavigationItem type='button' href='/sign-up'>
              sign up
            </NavigationItem>
          }

        </Container>
      </Nav>
    )
  }
}

NavigationBar.propTypes = {
  authenticated: PropTypes.bool
}

function mapStateToProps (state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(NavigationBar)
