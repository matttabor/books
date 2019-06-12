const Book = require('./models/booksModel');

const key = require('./keys');

// mongoose set up
const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo-cluster-ip-service:27017/books');

// express app setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());


// route handlers
app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/books/:bookId', async (req, res) => {
    Book.findById(req.params.bookId, (err, book) => {
        res.json(book);
    })
});

app.get('/books/', (req,res)=>{
    Book.find({}, (err, books) => {
        res.json(books);
    });
})

app.post('/books', (req, res) => {
    let book = new Book(req.body);
    book.save();
    res.status(201).send(book);
})

const port = 5000;

app.listen(port, err => {
    console.log('Listening on port '+ port);
})