
const { GraphQLString } =  require('graphql');
const eventGraphQLType = require('./../types/eventType');
const Event = require('../../models/event');

module.exports = {
  type: eventGraphQLType,
  args: { id: { type: GraphQLString }},
  resolve(parent, args) {
    return Event.findById(args.id)
  }
}