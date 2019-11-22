const { GraphQLObjectType, GraphQLString } = require('graphql');
const playerGraphQLType =  require('./../types/playerType');
const Player = require('./../../models/player');

module.exports = {
    type: playerGraphQLType,
    args: {
      id: { type: GraphQLString }
    },
    resolve(parent, args) {
      return Player.findByIdAndDelete(args.id)
        .then(player => player.remove())
        .then(deletedPlayer => deletedPlayer)
        .catch(err => console.log(err))
  }
};