import { StackNavigator, TabNavigator } from 'react-navigation'
import React from 'react'
import { Platform, StatusBar } from 'react-native'
import { Icon } from 'react-native-elements'
import Pages from './pages'
import colors from 'app/theme/colors'
import { width, height, totalSize } from 'react-native-dimension'

export const StackNav = StackNavigator(
  {
    Home: {
      screen: Pages.HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Home',
        headerBackTitle: null,
        headerTintColor: colors.white,
        headerMode: 'screen',
        headerStyle: {
          backgroundColor: colors.black
        }
      })
    },
    Stores: {
      screen: Pages.StoresScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Lojas',
        headerBackTitle: null,
        headerTintColor: colors.white,
        headerMode: 'screen',
        headerStyle: {
          backgroundColor: colors.black
        }
      })
    },
    Products: {
      screen: Pages.ProductsScreen,
      navigationOptions: {
        title: 'Produtos',
        headerBackTitle: null,
        headerTintColor: colors.white,
        headerMode: 'screen',
        headerStyle: {
          backgroundColor: colors.black
        }
      }
    },
    ProductsDetail: {
      screen: Pages.ProductsDetailScreen,
      navigationOptions: {
        title: 'Informacoes',
        headerBackTitle: null,
        headerTintColor: colors.white,
        headerMode: 'screen',
        headerStyle: {
          backgroundColor: colors.black
        }
      }
    }
  },
  {
    initialRouteName: 'Home',
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
  }
)
