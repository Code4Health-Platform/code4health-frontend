import styled from 'styled-components'
import {Flex} from 'grid-styled'
import Colors from '@theme/colors'

const Container = styled.div`
  margin: 0;
  padding: 0;
  min-height: 5.6rem;
  position: relative;
  background-color: ${Colors.navigation.background};

  @media (min-width: 768px) {
    padding: 0;
  }
`
const Nav = styled(Flex)`
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem 0 1rem 1rem;

  display: block;
  min-height: 5.6rem;

  @media (min-width: 768px) {
    display: flex;
    padding: 0;
  }
`

export {
  Container,
  Nav
}
