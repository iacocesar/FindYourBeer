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
import categoryQuery from 'app/queries/CategoryList/category'
import productsQuery from 'app/queries/Products/products'
import SceneContainer from './SceneContainer'
import { ProductsScreen } from './Products'

export default hoistStatics(
  compose(
    withApollo,
    withState('tabSelected', 'setTabSelected'),
    withState('products', 'setProducts'),
    withState('productsLoading', 'setProductsLoading'),
    withProps(props => {
      return {
        storeId: props.navigation.state.params.store.id
      }
    }),
    graphql(categoryQuery, {
      name: 'category'
    }),
    withProps(({ category }) => {
      return {
        allCategory: category && category.allCategory && category.allCategory,
        loading: category.loading
      }
    }),
    withWrapper(SceneContainer),
    withHandlers({
      getProducts: ({
        client,
        setTabSelected,
        storeId,
        setProducts,
        setProductsLoading
      }) => async data => {
        setTabSelected(data)

        if (!data || !storeId) return

        setProductsLoading(true)

        await client
          .query({
            query: productsQuery,
            variables: {
              id: '' + storeId,
              search: '',
              categoryId: data ? Number(data.id) : ''
            }
          })
          .then(result => setProducts(result))
          .catch(err => setProductsLoading(false))

        setProductsLoading(false)
      },
      goToProductsDetail: ({ navigation: { navigate } }) => data => {
        if (data) navigate('ProductsDetail', { productsData: data })
      }
    }),
    withProps(props => {
      return {
        ProductsData:
          props.products &&
          props.products.data &&
          props.products.data.poc.products
      }
    })
  )
)(ProductsScreen)
