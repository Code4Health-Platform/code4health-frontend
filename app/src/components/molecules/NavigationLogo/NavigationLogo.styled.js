import styled from 'styled-components'

const NavigationLogoStyled = styled.div`
  margin: 0 auto 0 0;
  display: inline-block;
  font-size: 3rem;
  font-weight: 600;


  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
      margin: 0 auto 0 1rem;
    display: flex;
  }
`

export default NavigationLogoStyled
