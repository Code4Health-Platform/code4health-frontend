import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const baseStyles = `

`

const LoadingForm = styled.form`
  position: relative;
  ${baseStyles}
`

const Overlay = styled.div`
  background-color: rgba(255,255,255,0.75);
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
const LoadedForm = styled.form`
  ${baseStyles}
`

const StyledForm = (props) => {
  if (props.isLoading) {
    return (<LoadingForm onSubmit={props.onSubmit}><Overlay />{props.children}</LoadingForm>)
  } else {
    return (<LoadedForm onSubmit={props.onSubmit}>{props.children}</LoadedForm>)
  }
}

StyledForm.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func
}

export default StyledForm
