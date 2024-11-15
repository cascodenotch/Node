const express = require('express');
const router = express.Router();
const booksController = require('../controller/arrayController');

router.get('/books', booksController.getAllBooks);
router.post('/books', booksController.addBook);

module.exports = router;