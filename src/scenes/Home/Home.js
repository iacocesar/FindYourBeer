import React, { Component } from 'react'
import { Text } from 'react-native'
import * as FieldComponents from 'app/components/FieldComponents'
import Container from 'app/components/Container'
import Content from 'app/components/Content'
import StatusBar from 'app/components/StatusBar'
import colors from 'app/theme/colors'
import fonts from 'app/theme/fonts'
import Spacer from 'app/components/Spacer'
import TextInputPlaces from 'app/components/TextInputPlaces'

export const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <Container>
      <StatusBar light margin />
      <Content>
        <Spacer min={10} max={20} />
        <FieldComponents.Label
          color={colors.black}
          label="Onde voce está?"
          fontFamily={fonts.openSansBold}
          fontSize={35}
        />
        <FieldComponents.Label
          color={colors.blueGrey}
          label="Utilize a caixa de pesquisa para localizar os distribuidores mais proximos."
          fontFamily={fonts.openSansRegular}
          fontSize={16}
        />
        <Spacer min={5} max={10} />
        <TextInputPlaces navigate={navigate} />
      </Content>
    </Container>
  )
}
