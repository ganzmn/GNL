const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const EventTypeType = new GraphQLObjectType({
  name: 'EventType',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    frequency: { type: GraphQLString }
  })
});

module.exports = EventTypeType;