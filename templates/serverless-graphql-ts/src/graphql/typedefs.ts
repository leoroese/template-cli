import { gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type Query {
    """
    A test message.
    """
    testMessage: String!
  }
`;

export default typeDefs;
