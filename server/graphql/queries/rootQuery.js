
const { GraphQLObjectType } =  require('graphql');

const Player = require('../../models/player');
const queryAllPlayers = require('./queryAllPlayers');
const queryPlayerById = require('./queryPlayerById');

const User = require('../../models/user');
const queryAllUsers = require('./queryAllUsers');
const queryUserById = require('./queryUserById');

const Team = require('../../models/team');
const queryAllTeams = require('./queryAllTeams');
const queryTeamById = require('./queryTeamById');

const Event = require('../../models/event');
const queryAllEvents = require('./queryAllEvents');
const queryEventById = require('./queryEventById');

const queryAllEventTypes = require('./queryAllEventTypes');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    queryPlayerById,
    queryAllPlayers,
    queryAllUsers,
    queryUserById,
    queryAllTeams,
    queryTeamById,
    queryAllEvents,
    queryEventById,
    queryAllEventTypes
  }
})

module.exports = RootQuery;