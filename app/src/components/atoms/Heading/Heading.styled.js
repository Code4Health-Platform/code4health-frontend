import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const baseStyles = `
  font-weight: 600;

  svg {
    margin: 0 1rem 0 0;
  }

  a {
    text-decoration: none;
  }
`

const H1 = styled.h1`
  font-size: 2.2rem;
  ${baseStyles}
`

const H2 = styled.h2`
  font-size: 2rem;
  ${baseStyles}
`

const H3 = styled.h3`
  font-size: 1.8rem;
  ${baseStyles}
`

const StyledHeading = (props) => {
  switch (props.level) {
    case 1:
      return (<H1>{props.children}</H1>)
    case 2:
      return (<H2>{props.children}</H2>)
    case 3:
      return (<H3>{props.children}</H3>)
    default:
      return (<div>missing heading!</div>)
  }
}

StyledHeading.propTypes = {
  children: PropTypes.node,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6])
}

export default StyledHeading
