import gql from 'graphql-tag'

export default gql`
  query pocSearchMethod(
    $now: DateTime!
    $algorithm: String!
    $lat: String!
    $long: String!
  ) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      id
      status
      tradingName
      officialName
      address {
        address1
        address2
        number
        city
        province
        zip
        coordinates
      }
      phone {
        phoneNumber
      }
    }
  }
`
