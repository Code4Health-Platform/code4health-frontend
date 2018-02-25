import styled from 'styled-components'
import {Box} from 'grid-styled'

const StyledProjectsSummary = styled(Box)`
  width: 100%;
`

const Container = styled(Box)`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  overflow-x: auto;
`

const ProjectTable = styled.table`
  width: 100%;
  overflow-x: scroll;
  border-spacing: 0;
  border-collapse: collapse;

  tr:nth-child(odd) {
    background-color: #efefef;
  }
`

const ProjectTableRow = styled.tr`
  padding: 0.5rem;
`

const ProjectTableColumn = styled.td`
  padding: 1rem;
  word-wrap: break-word;
  vertical-align: top;
`

export {
  StyledProjectsSummary,
  Container,
  ProjectTable,
  ProjectTableRow,
  ProjectTableColumn
}
