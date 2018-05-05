import React from 'react'
import styled from 'styled-components'
import { StatusBar as NativeStatusBar } from 'react-native'
import colors from 'app/theme/colors'

const MarginWrapper = styled.View`
  height: 20;
`

function StatusBar({ color = colors.black, margin, dark }) {
  const statusBar = (
    <NativeStatusBar
      barStyle={dark ? 'dark-content' : 'light-content'}
      backgroundColor={colors.black}
      animated
      translucent
    />
  )

  return margin ? (
    <MarginWrapper color={color}>{statusBar}</MarginWrapper>
  ) : (
    statusBar
  )
}

export default StatusBar
