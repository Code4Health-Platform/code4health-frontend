import styled from 'styled-components'
import {Box} from 'grid-styled'

const StyledProjectsSummary = styled(Box)`
  width: 100%;
`

const ProjectContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0;


  h1, h2, h3 {
    text-transform: capitalize;
  }

  @media (min-width: 768px) {
    width: 33.3%;
    margin: 0;
  }
`

const ProjectsGridContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export {
  StyledProjectsSummary,
  ProjectContainer,
  ProjectsGridContainer
}
