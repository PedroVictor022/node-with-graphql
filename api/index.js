const { ApolloServer, gql } = require('apollo-server');

const users = [
   {
      nome: 'Ana',
      ativo: true
   },
   {
      nome: 'Luiz',
      ativo: false
   }
]

const typeDefs = gql`
   type User {
   nome: String!
   ativo: Boolean!
   email: String
}
`




const server = new ApolloServer({ typeDefs, resolvers });