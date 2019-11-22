const mongoose = require('mongoose');

const initDB = () => {

  mongoose.connect('mongodb://@ds027748.mlab.com:27748/gnl', {
    auth: {
      user: "jganser",
      password: "12Oranges?"
    },
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(
    () => {
      console.log("Database connected");
    },
    err => {
      /** handle initial connection error */
      console.log("Error in database connection. ", err);
    }
  );


  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });

}

module.exports = initDB;