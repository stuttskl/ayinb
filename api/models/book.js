var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Title cannot be blank'
  },
  author: {
    type: String,
    required: 'Author cannot be blank'
  },
  desc: {
    type: String,
  },
  img: {
    type: String
  },
  rating: {
    type: Number
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date
  }
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;