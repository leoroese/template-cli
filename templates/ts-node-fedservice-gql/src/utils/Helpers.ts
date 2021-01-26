import gql from 'graphql-tag';
import { addResolversToSchema, GraphQLResolverMap } from 'apollo-graphql';
import { buildSchema, BuildSchemaOptions, createResolversMap } from 'type-graphql';
import { specifiedDirectives } from 'graphql';
import { printSchema, buildFederatedSchema as buildApolloFederationSchema } from '@apollo/federation';
import federationDirectives from '@apollo/federation/dist/directives';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function buildFederatedSchema(
  options: Omit<BuildSchemaOptions, 'skipCheck'>,
  referenceResolvers?: GraphQLResolverMap<any>
) {
  const schema = await buildSchema({
    ...options,
    directives: [...specifiedDirectives, ...federationDirectives, ...(options.directives || [])],
    skipCheck: true,
  });

  const federatedSchema = buildApolloFederationSchema({
    typeDefs: gql(printSchema(schema)),
    resolvers: createResolversMap(schema) as any,
  });

  if (referenceResolvers) {
    addResolversToSchema(federatedSchema, referenceResolvers);
  }
  return federatedSchema;
}
