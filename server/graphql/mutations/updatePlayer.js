const { GraphQLObjectType, GraphQLString } = require('graphql');
const playerGraphQLType =  require('./../types/playerType');
const Player = require('./../../models/player');

module.exports = {
    type: playerGraphQLType,
    args: {
      id: { type: GraphQLString },
      fName: { type: GraphQLString },
      lName: { type: GraphQLString },
      nName: { type: GraphQLString }
    },
    resolve(parent, args) {
        return Player.findById(args.id)
        .then(player => {
            player.fName = args.fName,
            player.lName = args.lName,
            player.nName = args.nName
      
            return player.save()
        })
        .then(updatedPlayer => updatedPlayer)
        .catch(err => console.log(err))
  }
};