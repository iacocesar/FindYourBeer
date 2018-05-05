import gql from 'graphql-tag'

export default gql`
  query pocCategorySearch($id: ID!, $search: String!, $categoryId: Int!) {
    poc(id: $id) {
      products(categoryId: $categoryId, search: $search) {
        productVariants {
          inventoryItemId
          productVariantId
          title
          subtitle
          description
          shortDescription
          attachment
          volume
          volumeUnit
          weight
          weightUnit
          barcode
          published
          price
          imageUrl
          components {
            id
            productVariantId
            productVariant {
              id
              title
              description
              shortDescription
            }
          }
        }
      }
    }
  }
`
