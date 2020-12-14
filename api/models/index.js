var mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('debug', true);

var uri = `mongodb+srv://${process.env.DB_USRNAME}:${process.env.DB_PASSWORD}@cluster0.pju8f.mongodb.net`
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDb connected"))
  .catch(err => console.log(err));

mongoose.Promise = Promise;

module.exports.Book = require("./book");