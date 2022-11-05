const { ApolloServer, gql } = require('apollo-server');

// Toda request eh post
// Toda request bate no mesmo endpoint (/graphql)


// Sao nomes reservados do GRAPHQL
// Query -> Obter informacoes (GET) 
// Mutations -> Manipular dados (POST/PUT/PATCH/DELETE)
// Scalar Types -> String, Int, Boolean, Float e ID

const typeDefs = gql`
   type Query {
      hello: String
   }
`;

// Function exec here
const resolvers = {
   Query: {
      hello: () => {
         return 'Hello world!'
      }
   }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen()
   .then(({ url }) => console.log(`Server started at ${url}`));