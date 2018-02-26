import styled from 'styled-components'

const Container = styled.div`
  margin: 0 0 1rem 0;
  padding: 0.5rem;
  font-size: 1.6rem;
`

const StyledLabel = styled.label`
  padding: 0;
  display: inline-block;
  margin-left: 0.5rem;
  cursor: pointer;
  color: #efefef;

  svg {
    border-radius: 50%;
    color: #efefef;
    cursor: pointer;
    margin-right: 0.5rem;
  }
`

const StyledCheckbox = styled.input.attrs({
  type: 'checkbox'})`
  display: none;
  appearance: none;
  cursor: pointer;

  &:checked ~ label, &:checked ~ label > svg {
    color: black;
  }
`

export {
  Container,
  StyledCheckbox,
  StyledLabel
}
