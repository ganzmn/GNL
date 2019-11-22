
const { GraphQLObjectType, GraphQLString } = require('graphql');

const addPlayer = require('./mutations/addPlayer');
const updatePlayer = require('./mutations/updatePlayer');
const removePlayer = require('./mutations/removePlayer');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addPlayer,
    updatePlayer,
    removePlayer,
  }
})

module.exports = Mutation;