import React from 'react'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { StackNav } from './src/navigation'
import { API_URL, API_AUTH } from './src/lib/env'

global.XMLHttpRequest = global.originalXMLHttpRequest
  ? global.originalXMLHttpRequest
  : global.XMLHttpRequest

global.FormData = global.originalFormData
  ? global.originalFormData
  : global.FormData

const httpLink = new HttpLink({ uri: `${API_URL}` })

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers
    }
  }
})

export const App = () => {
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <StackNav />
    </ApolloProvider>
  )
}

export default App
