import {
  withHandlers,
  withState,
  hoistStatics,
  compose,
  withProps
} from 'recompose'
import { withApollo } from 'react-apollo'
import { graphql } from 'react-apollo'
import { HomeScreen } from './Home'
import { AsyncStorage } from 'react-native'

export default hoistStatics(HomeScreen)
