import React, { Component } from 'react'
import Tabs from 'react-native-tabs'
import styled from 'styled-components'
import colors from 'app/theme/colors'
import fonts from 'app/theme/fonts'
import { currencyParser } from 'app/lib/utils'

const TextView = styled.Text`
  color: ${props => {
    if (props.color) return props.color
    return colors.cloudBurst
  }};
  ${fonts.openSansBold};
  font-size: 16;
  text-align: center;
`

const Content = styled.View`
  flex: 1;
  flex-shrink: 1;
  flex-flow: row wrap;
  justify-content: space-between;
`

const ContentText = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
`

const ScrollView = styled.ScrollView`
  flex: 1;
  padding-horizontal: 20;
`

const TouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  min-width: 150;
  min-height: 300;
  max-width: 150;
  max-height: 300;
  margin: 10px 5px 10px 5px;
`

const ContentItems = styled.View`
  flex: 1;
  height: 120;
  min-height: 120;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-width: 0.3;
  border-radius: 5;
  border-color: black;
  box-shadow: 2px 5px #888888;
`

const Image = styled.Image`
  min-height: 30%;
  flex: 1;
  resize-mode: contain;
  width: 110;
`

class StoreList extends Component {
  render() {
    const { data, handlerFunction } = this.props

    return (
      <ScrollView>
        <Content>
          {data &&
            data.map(dataValue =>
              dataValue.productVariants.map(dataVariants => (
                <TouchableOpacity
                  key={dataVariants.productVariantId}
                  onPress={() => {
                    if (handlerFunction) handlerFunction(dataVariants)
                  }}>
                  <ContentItems>
                    <Image
                      source={{
                        uri: `${dataVariants.imageUrl}`
                      }}
                      defaultSource={require('app/assets/images/ambev_logo.png')}
                    />
                    <ContentText>
                      <TextView>{dataVariants.title}</TextView>
                      <TextView color={colors.violetDark}>
                        {`R$${currencyParser(
                          dataVariants.price ? dataVariants.price : 0
                        )}`}
                      </TextView>
                    </ContentText>
                  </ContentItems>
                </TouchableOpacity>
              ))
            )}
        </Content>
      </ScrollView>
    )
  }
}

export default StoreList
