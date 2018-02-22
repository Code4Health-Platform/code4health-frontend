import styled from 'styled-components'
import {Flex} from 'grid-styled'

const Container = styled.div`
  margin: 0;
  padding: 0;
  min-height: 5.6rem;
  position: relative;

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
  border-bottom: 1px solid #363636;

  @media (min-width: 768px) {
    display: flex;
    // padding: 0;
    padding: 1rem auto 1rem 1rem;
  }
`

export {
  Container,
  Nav
}
