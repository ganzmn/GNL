const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas
*/

const EventTypeSchema = new Schema({
  name: String,
  frequency: String
});

module.exports = mongoose.model('EventType', EventTypeSchema);