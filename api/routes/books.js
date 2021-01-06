var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', (req, res) => {
  db.Book.find({"current": "no"})
    .then(function(books) {
      res.json(books);
    })
    .catch(function(err) {
      res.send(err);
    })
});

router.get('/current', (req, res) => {
  db.Book.find({"current": "yes"})
    .then(function(books) {
      res.json(books);
    })
    .catch(function(err) {
      res.send(err);
    })
});

router.post('/', (req, res) => {
  db.Book.create(req.body)
    .then(function(newBook) {
      res.status(201).res.json(newBook);
    })
    .catch(function(err) {
      res.send(err);
    })
});

router.get('/:bookId', (req, res) => {
  db.Book.findById(req.params.bookId)
    .then(function(book) {
      res.json(foundBook)
    })
    .catch(function(err) {
      res.send(err);
    })
});

router.delete('/:bookId', (req, res) => {
  db.Book.deleteOne({_id: req.params.bookId})
    .then(function() {
      res.json({message: 'deleted'})
    })
    .catch(function(err) {
      res.send(err);
    })
});

router.put('/:bookId', (req, res) => {
  db.Book.findOneAndUpdate({_id: req.params.bookId}, req.body, {new:true})
    .then(function(book) {
      res.json(book);
    })
    .catch(function(err) {
      res.send(err);
    })
});

module.exports = router;