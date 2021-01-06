var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: Array,
  },
  desc: {
    type: String,
  },
  img: {
    type: String
  },
  rating: {
    type: Number,
    default: 0
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date
  },
  pageCount: {
    type: Number
  },
  currentPage: {
    type: Number,
    default: 0
  },
  current: {
    type: String,
    default: "no"
  }
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;