import Styled from 'styled-components'

const Container = Styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;

  a {
    text-decoration: none;
    border: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex: 1 1;
    justify-content: center;
    flex-direction: column;


    h1, h2, h3 {
      text-transform: capitalize;
      display: block;
    }
  }

  @media (min-width: 768px) {
    width: 33.3%;
    margin: 0;
  }


`

const InnerContainer = Styled.div`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  text-align: center;
  flex: 1 1;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0,0,0,0.02);
  box-shadow: 0px 2px 4px rgba(0,0,0,0.18);
  border-radius: 4px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 3px 6px rgba(0,0,0,0.24);
    margin-top:
  }
`

export {
  Container,
  InnerContainer
}
