const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const EventType = new GraphQLObjectType({
  name: 'Event',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    date: { type: GraphQLString },
    eventTypeId: { type: GraphQLString }
  })
});

module.exports = EventType;