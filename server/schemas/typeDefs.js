const { gql } = require('apollo-server-express');

const { User } = require('../models');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int 
    savedBooks: [Book]
  }
  type Book {
    bookId: String!
    authors: [String]
    description: String 
    title: String 
    image: String 
    link: String 
  }
  type Query {
    me: User
  }
  type Auth {
    token: String!
    user: User!
  }
  type Mutation {
    login( email: String!, password: String!): User
  }
`;



module.exports = typeDefs;
