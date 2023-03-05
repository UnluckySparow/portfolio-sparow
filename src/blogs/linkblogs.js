import { ApolloClient,createHttpLink,InMemoryCache} from "@apollo/client";
const link =createHttpLink({
  uri:"https://closing-tapir-89.hasura.app/v1beta1/relay"
})
const blogsapi = ApolloClient({
  cache:new InMemoryCache(),
  link:link
})
export default blogsapi;