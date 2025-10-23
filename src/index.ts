import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

interface Patient {
  id: string;
  firstName: string;
  lastName: string;
}

const patients: Patient[] = [
  { id: 'p1', firstName: 'Ada', lastName: 'Lovelace' },
  { id: 'p2', firstName: 'Jonas', lastName: 'Salk' },
  { id: 'p3', firstName: 'Virginia', lastName: 'Apgar' }
];

const typeDefs = `#graphql
  type Patient {
    id: ID!
    firstName: String!
    lastName: String!
  }

  type Query {
    patients: [Patient!]!
  }
`;

const resolvers = {
  Query: {
    patients: (): Patient[] => patients
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const port = process.env.PORT ? Number(process.env.PORT) : 4000;

const { url } = await startStandaloneServer(server, {
  listen: { port }
});

console.log(`🚀 Server ready at ${url}`);
