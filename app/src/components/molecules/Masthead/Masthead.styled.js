import styled from 'styled-components'
import Colors from '@theme/colors'

const StyledMasthead = styled.div`
  background-color: ${Colors.masthead.background};
  width: 100%;
  margin: 0 0 1rem 0;
  align-items: center;
  display: block;
  padding: 3rem 1rem;

  h1, h2, h3, p {
    margin: 0;
    color: ${Colors.masthead.text};
  }
`

export {StyledMasthead}
