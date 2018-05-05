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
import { AsyncStorage } from 'react-native'
import withWrapper from 'app/lib/withWrapper'
import categoryQuery from 'app/queries/CategoryList/category'
import storesQuery from 'app/queries/Stores/stores'
import SceneContainer from './SceneContainer'
import { StoresScreen } from './StoresScreen'

export default hoistStatics(
  compose(
    withApollo,
    withProps(props => {
      return {
        details: props.navigation.state.params,
        now: new Date(),
        algorithm: 'NEAREST',
        lat: '' + props.navigation.state.params.details.lat,
        long: '' + props.navigation.state.params.details.lng
      }
    }),
    graphql(storesQuery, { name: 'stores' }),
    withProps(({ stores }) => {
      return {
        loading: stores && stores.loading
      }
    }),
    withWrapper(SceneContainer),
    withHandlers({
      goToProducts: ({ navigation: { navigate } }) => store => {
        if (store && store.id) navigate('Products', { store: store })
      }
    })
  )
)(StoresScreen)
