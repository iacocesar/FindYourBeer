import React from 'react'
import styled from 'styled-components'
import * as FieldComponents from 'app/components/FieldComponents'
import Content from 'app/components/Content'
import StatusBar from 'app/components/StatusBar'
import StoresList from 'app/components/StoresList'
import colors from 'app/theme/colors'
import fonts from 'app/theme/fonts'

const Container = styled.View`
  flex-grow: 1;
`
const StoreErrorContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const TextView = styled.Text`
  color: ${colors.cloudBurst};
  ${fonts.openSansBold};
  font-size: 16;
`

export const StoresScreen = ({ stores, goToProducts, details }) => {
  return (
    <Container>
      <StatusBar light />
      {stores && stores.pocSearch.length > 0 ? (
        <StoresList data={stores.pocSearch} handlerFunction={goToProducts} />
      ) : (
        <Content>
          <StoreErrorContent>
            <TextView>
              {`Nao existem distribuidores disponíveis para ${
                details.description
              }`}
            </TextView>
          </StoreErrorContent>
        </Content>
      )}
    </Container>
  )
}
