import { ApolloClient, InMemoryCache } from "@apollo/client"

// 1. initialize an ApolloClient instance
// 2. pass a configuration object to its constructor
const apolloClient = new ApolloClient({
  // specify the URL of GraphQL server / endpoint
  // the FlyBy GraphQL API from Apollo Odyssey's Voyage tutorial series
  uri: "https://flyby-gateway.herokuapp.com/",
  // uri: "https://api-eu-central-1.hygraph.com/v2/ck8sn5tnf01gc01z89dbc7s0o/master",
  // create an instance of InMemoryCache
  // used to cache query results
  cache: new InMemoryCache()
})

export default apolloClient
