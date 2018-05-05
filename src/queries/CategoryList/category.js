import gql from 'graphql-tag'

export default gql`
  query allCategoriesSearch {
    allCategory {
      title
      id
    }
  }
`
