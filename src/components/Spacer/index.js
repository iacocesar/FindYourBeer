import React, { Component } from 'react'
import { Spacer } from './styles'

class SpacerView extends Component {
  render() {
    const { min, max } = this.props

    return <Spacer min={min} max={max} />
  }
}

export default SpacerView
