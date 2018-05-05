import React from 'react'
import styled from 'styled-components/native'
import * as FieldComponents from 'app/components/FieldComponents'
import StatusBar from 'app/components/StatusBar'
import Spacer from 'app/components/Spacer'
import TabsNavigator from 'app/components/TabsNavigator'
import ProductsList from 'app/components/ProductsList'
import Loading from 'app/components/Loading'
import colors from 'app/theme/colors'
import fonts from 'app/theme/fonts'

const Container = styled.View`
  flex: 1;
`

const Content = styled.View`
  flex: 1;
`

const ProductsContent = styled.View`
  flex: 1;
`

const ProductsErrorContent = styled.View`
  flex: 1;
  padding-horizontal: 20;
  justify-content: center;
  align-items: center;
`

const TextView = styled.Text`
  color: ${colors.cloudBurst};
  ${fonts.openSansBold};
  font-size: 16;
`

export const ProductsScreen = ({
  allCategory,
  ProductsData,
  details,
  description,
  tabSelected,
  setTabSelected,
  getProducts,
  productsLoading,
  goToProductsDetail
}) => {
  return (
    <Container>
      <Loading
        backgrounColor={'rgba(97, 47, 116, 0.6)'}
        loading={productsLoading}
      />
      <TabsNavigator
        data={allCategory && allCategory}
        setTabSelected={setTabSelected}
        tabSelected={tabSelected}
        handlerFunction={getProducts}
      />
      <StatusBar light margin />
      <Content>
        <Spacer min={90} max={125} />
        {ProductsData && ProductsData.length > 0 ? (
          <ProductsContent>
            <ProductsList
              handlerFunction={goToProductsDetail}
              data={ProductsData}
            />
          </ProductsContent>
        ) : (
          <ProductsErrorContent>
            <TextView>
              {`Nao foram encontrados produtos${
                tabSelected ? ' relacionados à ' + tabSelected.title + '.' : '.'
              }`}
            </TextView>
          </ProductsErrorContent>
        )}
      </Content>
    </Container>
  )
}
