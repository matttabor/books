const express = require('express');
const bookRouter = express.Router();
const Book = require('../models/booksModel');

bookRouter.route('/:bookId')
    .get(async (req, res) => {
        Book.findById(req.params.bookId, (err, book) => {
            res.json(book);
        })
    });

bookRouter.route('/')
    .get(async(req, res) => {
        Book.find({}, (err, books) => {
            res.json(books);
        });
    });

bookRouter.route('/')
    .post(async(req, res) => {
        let book = new Book(req.body);
        book.save();
        res.status(201).send(book);
    });

module.exports = bookRouter;