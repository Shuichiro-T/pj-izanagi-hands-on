import { GraphQLClient } from "graphql-request";

export default function createGqlClient() {
  const gqlClient = new GraphQLClient("http://localhost:3100/graphql");

  return gqlClient;
}