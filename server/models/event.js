const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas
*/

const EventSchema = new Schema({
  name: String,
  date: String,
  eventTypeId: String
});

module.exports = mongoose.model('Event', EventSchema);