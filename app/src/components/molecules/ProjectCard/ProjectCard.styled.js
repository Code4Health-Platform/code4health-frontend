import Styled from 'styled-components'

const Container = Styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`

const InnerContainer = Styled.div`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.18);
  border-radius: 4px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 3px 6px rgba(0,0,0,0.24);
  }
`

const DescriptionContainer = Styled.div`
  flex: 1;
`

const ButtonContainer = Styled.div`
  margin-top: 2rem;
`

const ComponentsContainer = Styled.div`

`

export {
  ButtonContainer,
  ComponentsContainer,
  Container,
  DescriptionContainer,
  InnerContainer
}
