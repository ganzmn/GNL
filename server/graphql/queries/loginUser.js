
const { GraphQLString } =  require('graphql');
const userGraphQLType = require('./../types/userType');
const User = require('../../models/user');

module.exports = {
  type: userGraphQLType,
  args: { email: { type: GraphQLString },
            pw: { type: GraphQLString }    
    },
    resolve(parent, args) {
    return User.find({email: args.email, pw: args.pw})
  }
}