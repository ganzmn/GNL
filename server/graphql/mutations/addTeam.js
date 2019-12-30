
const { GraphQLObjectType, GraphQLString } = require('graphql');
const teamGraphQLType =  require('./../types/teamType');
const Team = require('./../../models/team');

module.exports = {
  type: teamGraphQLType,
      args: {
        name: { type: GraphQLString }
      },
      resolve(parent, args) {
        const newTeam = new Team({
          name: args.name
        })

        return newTeam.save();
  }
};