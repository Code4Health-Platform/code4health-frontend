import styled from 'styled-components'
import {Flex} from 'grid-styled'

const Container = styled(Flex)`
  max-width: 1024px;
  margin: 0 auto;
`
const Nav = styled.div`
  width: 100%;
  border-bottom: 1px solid #efefef;
  padding: 0;
  margin: 0;
`

export {
  Container,
  Nav
}
