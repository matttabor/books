const Book = require('./models/booksModel');
const bookRouter = require('./routes/bookRouter');

// const key = require('./keys');

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
app.use('/api/books', bookRouter);


// route handlers
app.get('/', (req, res) => {
    res.send('Hello world!');
});

const port = 5000;

app.listen(port, err => {
    console.log('Listening on port '+ port);
})