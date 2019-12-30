const { GraphQLObjectType, GraphQLString } = require('graphql');
const userGraphQLType =  require('./../types/userType');
const User = require('./../../models/user');

module.exports = {
    type: userGraphQLType,
    args: {
      id: { type: GraphQLString },
      email: { type: GraphQLString },
      pw: { type: GraphQLString },
      roleId: { type: GraphQLString }
    },
    resolve(parent, args) {
        return User.findById(args.id)
        .then(user => {
            user.email = args.email,
            user.pw = args.pw,
            user.roleId = args.roleId
      
            return user.save()
        })
        .then(updatedUser => updatedUser)
        .catch(err => console.log(err))
  }
};