const typeDefs = `
  type User {
    _id: ID
    userName: String
    email: String!
    password: String
    savedBooks: [Book]!
  }
  type Book{
    authors: [String]!
    description: String
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
 
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    login(email:String!, password: String!): Auth

    saveBook(authors: [String]!, description: String!, title: String!, bookId: String!, image: String!, link: String!): User
   
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
