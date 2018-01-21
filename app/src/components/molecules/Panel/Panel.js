import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {PanelStyled} from './Panel.styled.js'

class Panel extends Component {
  render () {
    return (
      <PanelStyled>
        {this.props.children}
      </PanelStyled>
    )
  }
}

Panel.propTypes = {
  children: PropTypes.node
}

export default Panel
