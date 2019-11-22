const mongoose = require('mongoose');

const initDB = () => {

  mongoose.connect('', {
    auth: {
      user: "",
      password: ""
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