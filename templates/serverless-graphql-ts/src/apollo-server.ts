import { ApolloServer } from 'apollo-server-lambda';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typedefs';

const apolloServer = new ApolloServer({ resolvers, typeDefs });

// eslint-disable-next-line import/prefer-default-export
export const graphqlHandler = apolloServer.createHandler();
