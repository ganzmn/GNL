
const { GraphQLObjectType, GraphQLString } = require('graphql');

const addPlayer = require('./mutations/addPlayer');
const addUser = require('./mutations/addUser');
const updatePlayer = require('./mutations/updatePlayer');
const removePlayer = require('./mutations/removePlayer');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addPlayer,
    addUser,
    updatePlayer,
    removePlayer,
  }
})

module.exports = Mutation;