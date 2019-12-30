
const { GraphQLObjectType, GraphQLString } = require('graphql');

const addPlayer = require('./mutations/addPlayer');
const updatePlayer = require('./mutations/updatePlayer');
const removePlayer = require('./mutations/removePlayer');

const addUser = require('./mutations/addUser');
const updateUser = require('./mutations/updateUser');
const removeUser = require('./mutations/removeUser');

const addTeam = require('./mutations/addTeam');
const updateTeam = require('./mutations/updateTeam');
const removeTeam = require('./mutations/removeTeam');

const addEvent = require('./mutations/addPlayer');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addPlayer,
    updatePlayer,
    removePlayer,
    addUser,
    updateUser,
    removeUser,
    addTeam,
    updateTeam,
    removeTeam,
    addEvent
  }
})

module.exports = Mutation;