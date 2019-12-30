const { GraphQLObjectType, GraphQLString } = require('graphql');
const teamGraphQLType =  require('./../types/teamType');
const Team = require('./../../models/team');

module.exports = {
    type: teamGraphQLType,
    args: {
      id: { type: GraphQLString }
    },
    resolve(parent, args) {
      return Team.findByIdAndDelete(args.id)
        .then(team => team.remove())
        .then(deletedTeam => deletedTeam)
        .catch(err => console.log(err))
  }
};