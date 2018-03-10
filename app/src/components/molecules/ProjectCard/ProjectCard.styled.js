import Styled from 'styled-components'
import React from 'react'
import Colors from '@theme/colors'

const Container = Styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  overflow: hidden;
  display: flex;
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
  overflow: hidden;
  position: relative;

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

const DeleteContainer = Styled.div`
  height: 100%;
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: ${props => props.visible ? 'translateY(0)' : 'translateY(100%)'};
  background: white;
  transition: all 0.3s ease;
  z-index: 10;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`

export {
  ButtonContainer,
  ComponentsContainer,
  Container,
  DescriptionContainer,
  InnerContainer,
  DeleteContainer
}
