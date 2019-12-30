
const { GraphQLObjectType, GraphQLString } = require('graphql');
const eventGraphQLType =  require('./../types/eventType');
const Event = require('./../../models/event');

module.exports = {
  type: eventGraphQLType,
      args: {
        name: { type: GraphQLString },
        date: { type: GraphQLString },
        eventTypeId: { type: GraphQLString }
      },
      resolve(parent, args) {
        const newEvent = new Event({
            name: args.name,
            date: args.date,
            eventTypeId: args.eventTypeId
        })

        return newEvent.save();
  }
};