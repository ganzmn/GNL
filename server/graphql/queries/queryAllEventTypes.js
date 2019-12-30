const { GraphQLList } =  require('graphql');
const eventTypeGraphQLType = require('./../types/eventTypeType');
const EventType = require('../../models/eventType');

module.exports = {
  type: new GraphQLList(eventTypeGraphQLType),
  args: {},
  resolve() {
    return EventType.find({})
  }
}