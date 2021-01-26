import dotenv from 'dotenv-safe';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import { buildFederatedSchema } from './utils/Helpers';

dotenv.config();

const main = async () => {
  await createConnection();

  const schema = await buildFederatedSchema(
    {
      resolvers: [],
      orphanedTypes: [],
      // authChecker: customAuthChecker
    }
    // {
    //   Article: { __resolveReference: resolveArticleReference }
    // }
  );

  const app = express();

  app.use(
    '/graphql',
    bodyParser.json(),
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );

  const server = new ApolloServer({
    schema,
    tracing: false,
    context: ({ req }) => ({ permissions: req.headers['permissions'] }),
  });

  server.applyMiddleware({ app });

  app.listen(parseInt(process.env.PORT as string), () => {
    console.log(`Service ready at http://localhost:${process.env.PORT as string}/graphql`);
  });
};

main().catch(err => {
  console.error(err);
});
