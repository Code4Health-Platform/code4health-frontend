import React from 'react'
// import styled from 'styled-components'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Box} from 'grid-styled'
import {Button, Link} from '@atoms'
import {Logo} from '@molecules'

const ListItem = styled(Box)`
  padding: 1rem;
  justify-content: center;
  align-items: center;
`

const NavigationItemStyled = (props) => {
  switch (props.type) {
    case 'link':
      return (
        <ListItem>
          <Link to={props.href}>
            {props.children}
          </Link>
        </ListItem>
      )
    case 'button':
      return (
        <ListItem>
          <Button width='auto' href={props.href}>
            {props.children}
          </Button>
        </ListItem>
      )
    case 'logo':
      return (
        <ListItem>
          <Logo href={props.href}>
            {props.children}
          </Logo>
        </ListItem>
      )
  }
}

NavigationItemStyled.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  type: PropTypes.string
}

export default NavigationItemStyled
