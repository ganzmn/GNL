const { GraphQLObjectType, GraphQLString } = require('graphql');
const userGraphQLType =  require('./../types/userType');
const User = require('./../../models/user');

module.exports = {
    type: userGraphQLType,
    args: {
      id: { type: GraphQLString }
    },
    resolve(parent, args) {
      return User.findByIdAndDelete(args.id)
        .then(user => user.remove())
        .then(deletedUser => deletedUser)
        .catch(err => console.log(err))
  }
};