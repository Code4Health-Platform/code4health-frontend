import styled from 'styled-components'
import {Flex} from 'grid-styled'

const Container = styled.div`
  margin: 0;
  padding: 0;
  min-height: 5.6rem;
  position: relative;

  &:after {
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    display: block;
    height: 0.5rem;
    padding: 0;
    width: 100%;
    content: '';
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), transparent);
  }

  @media (min-width: 768px) {
    padding: 0;
  }
`
const Nav = styled(Flex)`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0;
  align-items: center;
  display: block;
  height: inherit;


  @media (min-width: 768px) {
    display: flex;
    padding: 0;
  }
`

export {
  Container,
  Nav
}
