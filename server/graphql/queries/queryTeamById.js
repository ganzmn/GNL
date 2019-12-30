
const { GraphQLString } =  require('graphql');
const teamGraphQLType = require('./../types/teamType');
const Team = require('../../models/team');

module.exports = {
  type: teamGraphQLType,
  args: { id: { type: GraphQLString }},
  resolve(parent, args) {
    return Team.findById(args.id)
  }
}