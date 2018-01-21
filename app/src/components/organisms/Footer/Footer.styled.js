import styled from 'styled-components'
import {Box} from 'grid-styled'

const Container = styled(Box)`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`
const StyledFooter = styled(Box)`
  width: 100%;
  border-top: 1px solid #efefef;
  padding: 0.5rem;
`

export {
  Container,
  StyledFooter
}
