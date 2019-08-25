import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers'

const server = new GraphQLServer({
    typeDefs: 'graphql/schema.graphql',
    resolvers: resolvers

});

server.start({port: 3000}, () => console.log('GraphQL Server Running.............'));

