import styled from 'styled-components'

export const NavigationToggleStyled = styled.button`
  border: 1px solid #efefef;
  border-radius: 4px;
  width: 4.6rem;
  height: 4.6rem;
  padding: 0.5rem;
  cursor: pointer;
  display: inline-block;
  float: right;
  position: relative;
  margin: 0rem 1rem 0 0;

  &:hover {
    background-color: #f5f5f5;
  }

  span {
    height: 0.2rem;
    border-radius: 2px;
    position: absolute;
    top: 1.5rem;
    left: 1rem;
    right: 1rem;
    background-color: #363636;
  }

  span:nth-child(1) {
    top: 2.2rem;
  }

  span:nth-child(2) {
    top: 2.9rem;
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    display: none;
  }
`
