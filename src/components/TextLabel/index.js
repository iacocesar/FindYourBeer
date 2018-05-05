import React, { Component } from 'react'
import styled from 'styled-components'

const Label = styled.Text`
  ${props =>
    props.color &&
    `
      color: ${props.color};
  `};

  ${props =>
    props.fontFamily &&
    `
      ${props.fontFamily};
  `};

  ${props =>
    props.fontSize &&
    `
      font-size: ${props.fontSize};
  `};
`

class TextLabel extends Component {
  render() {
    const { color, fontFamily, fontSize, label } = this.props

    return (
      <Label color={color} fontFamily={fontFamily} fontSize={fontSize}>
        {label}
      </Label>
    )
  }
}

export default TextLabel
