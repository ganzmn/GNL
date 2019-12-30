const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas
*/

const TeamSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Team', TeamSchema);