import React, { Component } from 'react'
import { Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import colors from 'app/theme/colors'
import fonts from 'app/theme/fonts'
import { styles } from './styles'
import { PLACES_KEY } from 'app/lib/env'

class TextInputPlaces extends Component {
  render() {
    const { navigate } = this.props

    return (
      <GooglePlacesAutocomplete
        placeholder="Buscar"
        minLength={2}
        autoFocus={true}
        returnKeyType={'search'}
        listViewDisplayed="auto"
        fetchDetails={true}
        renderDescription={row => row.description}
        onPress={(data, details = null) => {
          navigate('Stores', {
            description: data.description,
            details: details.geometry.location
          })
        }}
        getDefaultValue={() => ''}
        query={{
          key: `${PLACES_KEY}`,
          language: 'pt-br',
          types: 'geocode'
        }}
        GooglePlacesSearchQuery={{
          rankby: 'distance',
          types: 'stores'
        }}
        debounce={200}
        styles={styles}
      />
    )
  }
}

export default TextInputPlaces
