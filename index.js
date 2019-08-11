const { ApolloServer, gql } = require('apollo-server');

// Sample collection of books.
const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

// Schema of the data.
const typeDefs = gql`
  type Book {
    title: String
    author: String 
  }

  type Query {
    books: [Book]
  }
`

// Resolver for fetching the types in the schema.
const resolvers = {
  Query: {
    books: () => books
  }
}

// ApolloServer
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});