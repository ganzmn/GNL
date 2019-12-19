const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const PlayerType = new GraphQLObjectType({
  name: 'Player',
  fields: () => ({
    id: { type: GraphQLString },
    fName: { type: GraphQLString },
    lName: { type: GraphQLString },
    teamId: { type: GraphQLString },
    userId: { type: GraphQLString }
  })
});

module.exports = PlayerType;