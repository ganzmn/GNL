
const { GraphQLObjectType, GraphQLString } = require('graphql');
const userGraphQLType =  require('./../types/userType');
const User = require('./../../models/user');

module.exports = {
  type: userGraphQLType,
      args: {
        email: { type: GraphQLString },
        pw: { type: GraphQLString },
        roleId: { type: GraphQLString }
      },
      resolve(parent, args) {
        const newUser = new User({
          email: args.email,
          pw: args.pw,
          roleId: args.roleId
        })

        return newUser.save();
  }
};