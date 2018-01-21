import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledLogo = styled(Link)`
  color: #3273dc;
  cursor: pointer;
  text-decoration: none;
  font-size: 2.2rem;
  line-height: 4rem;
  font-weight: 500;
  border-left: 2px solid red;
  padding-left: 0.5rem;

  span {
    font-size: 1rem;
    vertical-align: super;
  }

  &:active, &:visited {
    color: #363636;
  }
`
