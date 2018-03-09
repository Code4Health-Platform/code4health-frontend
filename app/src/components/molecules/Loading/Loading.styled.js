import Styled from 'styled-components'

const Container = Styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom:0;
  background: rgba(255,255,255, 0.75);
  display: flex;
  align-items: center;

`

const InnerContainer = Styled.div`
  display: inline-block;
  margin: 0 auto;
`

export {
  Container,
  InnerContainer
}
