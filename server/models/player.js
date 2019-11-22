const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas
*/

const PlayerSchema = new Schema({
  fName: String,
  lName: String,
  nName: String
});

module.exports = mongoose.model('Player', PlayerSchema);