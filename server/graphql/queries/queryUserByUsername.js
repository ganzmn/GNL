
const { GraphQLList } =  require('graphql');
const { GraphQLString } =  require('graphql');
const userGraphQLType = require('./../types/userType');
const User = require('../../models/user');

module.exports = {
  type: GraphQLList(userGraphQLType),
  args: {email: {type: GraphQLString}},
  resolve:(root, args, context, info) => {
      console.log(args)
    return User.find({email: args.email}).exec();
  }
}