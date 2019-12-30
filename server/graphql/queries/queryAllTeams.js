const { GraphQLList } =  require('graphql');
const teamGraphQLType = require('./../types/teamType');
const Team = require('../../models/team');

module.exports = {
  type: new GraphQLList(teamGraphQLType),
  args: {},
  resolve() {
    return Team.find({})
  }
}