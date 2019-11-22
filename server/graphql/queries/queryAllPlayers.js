const { GraphQLList } =  require('graphql');
const playerGraphQLType = require('./../types/playerType');
const Player = require('../../models/player');

module.exports = {
  type: new GraphQLList(playerGraphQLType),
  args: {},
  resolve() {
    return Player.find({})
  }
}