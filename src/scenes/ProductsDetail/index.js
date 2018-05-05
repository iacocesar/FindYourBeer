import {
  withHandlers,
  withState,
  hoistStatics,
  compose,
  withProps
} from 'recompose'
import { Alert } from 'react-native'
import { withApollo } from 'react-apollo'
import { graphql } from 'react-apollo'
import withWrapper from 'app/lib/withWrapper'
import { ProductsDetailScreen } from './ProductsDetail'

export default hoistStatics(
  compose(
    withProps(props => {
      return {
        productsData: props.navigation.state.params.productsData
      }
    })
  )
)(ProductsDetailScreen)
