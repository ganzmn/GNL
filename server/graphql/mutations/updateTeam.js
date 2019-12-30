const { GraphQLObjectType, GraphQLString } = require('graphql');
const teamGraphQLType =  require('./../types/teamType');
const Team = require('./../../models/team');

module.exports = {
    type: teamGraphQLType,
    args: {
      id: { type: GraphQLString },
      name: { type: GraphQLString }
    },
    resolve(parent, args) {
        return Team.findById(args.id)
        .then(team => {
            team.name = args.name
      
            return team.save()
        })
        .then(updatedTeam => updatedTeam)
        .catch(err => console.log(err))
  }
};