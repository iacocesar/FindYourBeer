import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import Tabs from 'react-native-tabs'
import styled from 'styled-components'
import colors from 'app/theme/colors'
import fonts from 'app/theme/fonts'

const Scroll = styled.ScrollView`
  flex: 1;
  z-index: 2;
  max-width: 100%;
  position: absolute;
  background-color: ${colors.black};
`
const Content = styled.View`
  flex: 1;
  padding: 10px 20px 10px 20px;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

const TextView = styled.Text`
  color: ${props => {
    if (props.tabSelected) return colors.cloudBurst
    return colors.white
  }};

  ${fonts.openSansBold};
  font-size: 16;
`

const CategoryContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 100px;
  margin: 10px;
  padding: 10px;
  border-width: 1.3;
  border-radius: 5;

  border-color: ${props => {
    if (props.tabSelected) return 'transparent'
    return colors.white
  }};

  background-color: ${props => {
    if (props.tabSelected) return colors.white
    return 'transparent'
  }};
`

const CategoryContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: blue;
`

class TabsNavigator extends Component {
  render() {
    const { data, tabSelected, handlerFunction } = this.props

    return (
      <Scroll horizontal={true} showsHorizontalScrollIndicator={false}>
        <Content>
          {data &&
            data.map(dataValue => (
              <TouchableOpacity
                key={dataValue.id}
                onPress={() => {
                  handlerFunction(dataValue)
                }}>
                <CategoryContainer
                  tabSelected={
                    tabSelected && tabSelected.id === dataValue.id
                      ? true
                      : false
                  }>
                  <TextView
                    tabSelected={
                      tabSelected && tabSelected.id === dataValue.id
                        ? true
                        : false
                    }
                    name={dataValue.title}>
                    {dataValue.title}
                  </TextView>
                </CategoryContainer>
              </TouchableOpacity>
            ))}
        </Content>
      </Scroll>
    )
  }
}

export default TabsNavigator
