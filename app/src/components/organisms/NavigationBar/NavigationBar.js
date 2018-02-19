import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Nav, Container} from './NavigationBar.styled.js'
import {Icon} from '@atoms'
import {NavigationItem, NavigationMenu, NavigationLogo, NavigationToggle} from '@molecules'

class NavigationBar extends Component {
  constructor () {
    super()
    this.state = {menuOpen: false}
    this.toggleMenu = this.toggleMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  render () {
    return (
      <Container>
        <Nav align='center'>

          <NavigationToggle
            clickHandler={this.toggleMenu}
            open={this.state.menuOpen}
          />

          <NavigationLogo href='/'>
            inidus
          </NavigationLogo>

          <NavigationMenu open={this.state.menuOpen}>

            {this.props.authenticated &&
              <NavigationItem type='link' href='/projects' click={this.closeMenu}>
                <Icon icon='projects' />
                Projects
              </NavigationItem>
            }

            {this.props.authenticated &&
              <NavigationItem type='link' href='/account' click={this.closeMenu}>
                <Icon icon='account' />
                  Account
              </NavigationItem>
            }

            {this.props.authenticated &&
              <NavigationItem type='link' href='/log-out' click={this.closeMenu}>
                <Icon icon='logout' />
                Log Out
              </NavigationItem>
            }

            {!this.props.authenticated &&
              <NavigationItem href='/log-in' type='link' click={this.closeMenu}>
                Log In
              </NavigationItem>
            }

            {!this.props.authenticated &&
              <NavigationItem href='/sign-up' click={this.closeMenu} type='button'>
                Sign Up
              </NavigationItem>
            }
          </NavigationMenu>
        </Nav>
      </Container>
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
