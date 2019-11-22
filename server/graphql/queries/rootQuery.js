
const { GraphQLObjectType } =  require('graphql');

const Player = require('../../models/player');
const queryAllPlayers = require('./queryAllPlayers')
const queryPlayerById = require('./queryPlayerById');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    queryPlayerById,
    queryAllPlayers,
  }
})

module.exports = RootQuery;