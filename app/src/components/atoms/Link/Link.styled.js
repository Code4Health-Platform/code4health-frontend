import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledLink = styled(Link)`
  color: #3273dc;
  cursor: pointer;

  &:active, &:visited {
    color: #363636;
  }

  &:hover {
    color: #3273dc;
  }
`
