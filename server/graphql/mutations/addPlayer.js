
const { GraphQLObjectType, GraphQLString } = require('graphql');
const playerGraphQLType =  require('./../types/playerType');
const Player = require('./../../models/player');

module.exports = {
  type: playerGraphQLType,
      args: {
        fName: { type: GraphQLString },
        lName: { type: GraphQLString },
        nName: { type: GraphQLString }
      },
      resolve(parent, args) {
        const newPlayer = new Player({
          fName: args.fName,
          lName: args.lName,
          nName: args.nName
        })

        return newPlayer.save();
  }
};