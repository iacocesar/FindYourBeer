import React, { Component } from 'react'
import Tabs from 'react-native-tabs'
import styled from 'styled-components'
import colors from 'app/theme/colors'
import fonts from 'app/theme/fonts'

const TextView = styled.Text`
  color: ${colors.cloudBurst};
  ${fonts.openSansBold};
  font-size: 16;
  padding: 12px;
`

const Content = styled.View`
  flex: 1;
  height: 120;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 20px;
`

const ContentLogo = styled.View`
  flex: 1;
  max-width: 120;
  justify-content: center;
  align-items: center;
`

const Image = styled.Image`
  flex: 1;
  width: 100;
  resize-mode: contain;
`

const FlatList = styled.FlatList``

const TouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  margin: 1px 0px 1px 0px;
  elevation: 2;
  border-width: 1;
  border-color: rgba(0, 0, 0, 0.3);
  border-radius: 3;
`

const ContentItems = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
`

class StoreList extends Component {
  render() {
    const { data, handlerFunction } = this.props

    return (
      <FlatList
        onEndReachedThreshold={5}
        data={data}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              if (handlerFunction) handlerFunction(item)
            }}>
            <Content>
              <ContentLogo>
                <Image source={require('app/assets/images/ambev_logo.png')} />
              </ContentLogo>
              <ContentItems>
                <TextView>{item.tradingName}</TextView>
              </ContentItems>
            </Content>
          </TouchableOpacity>
        )}
      />
    )
  }
}

export default StoreList
