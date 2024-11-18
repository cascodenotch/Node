const express = require('express');
const router = express.Router();
const booksController = require('../controller/arrayController');

router.get('/books', booksController.getAllBooks);
router.post('/books', booksController.addBook);
router.put('/books', booksController.updateBook);
router.delete('/books/', booksController.deleteBook);
router.get('/books/:id_book', booksController.getOneBook);

module.exports = router;