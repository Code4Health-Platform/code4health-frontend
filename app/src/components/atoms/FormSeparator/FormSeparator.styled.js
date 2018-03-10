// import React from 'react'
import styled from 'styled-components'
import Colors from '@theme/colors'

const Container = styled.div`
  text-align: center;
  margin: 1rem 0;
  position: relative;
  background: ${Colors.background};
`

const Text = styled.div`
  display: inline-block;
  background: inherit;
  padding: 0.5rem;
  z-index: 1;
  position: relative;
`

const Line = styled.div`
  background: ${Colors.gray};
  z-index: 0;
  width: 100%;
  height: 1px;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
`

export {
  Container,
  Line,
  Text
}
