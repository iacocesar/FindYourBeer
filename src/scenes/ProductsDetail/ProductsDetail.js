import React from 'react'
import styled from 'styled-components/native'
import * as FieldComponents from 'app/components/FieldComponents'
import StatusBar from 'app/components/StatusBar'
import Spacer from 'app/components/Spacer'
import TabsNavigator from 'app/components/TabsNavigator'
import Container from 'app/components/Container'
import Content from 'app/components/Content'
import ProductsList from 'app/components/ProductsList'
import Loading from 'app/components/Loading'
import colors from 'app/theme/colors'
import fonts from 'app/theme/fonts'
import { currencyParser } from 'app/lib/utils'

const ProductsContent = styled.View`
  flex: 1;
  max-height: 50%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Image = styled.Image`
  width: 150;
  height: 150;
`

const TextView = styled.Text`
  color: ${colors.cloudBurst};
  ${fonts.openSansBold};
  font-size: 16;
`

export const ProductsDetailScreen = ({ productsData }) => {
  return (
    <Container>
      <StatusBar light margin />
      <Content>
        <ProductsContent>
          <Image
            source={{
              uri: `${productsData.imageUrl}`
            }}
          />
        </ProductsContent>
        <TextView>{productsData.title}</TextView>
        <Spacer min={10} max={20} />
        <TextView>{`Valor: R$${currencyParser(
          productsData ? productsData.price : 0
        )}`}</TextView>
        <Spacer min={10} max={20} />
        <TextView>{`Descricao: ${
          productsData.description ? productsData.description : ''
        }`}</TextView>
      </Content>
    </Container>
  )
}
