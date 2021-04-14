import environment from '../environments';

const resolvers = {
  Query: {
    testMessage: (): string => environment.secretMessage,
  },
};

export default resolvers;
