const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas
*/

const UserSchema = new Schema({
email: {
    type: String
},
pw: {
    type: String
},
roleId: {
    type: String
}
}, {
    collection: 'users'
})

module.exports = mongoose.model('User', UserSchema)