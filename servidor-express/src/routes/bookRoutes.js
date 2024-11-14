const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Define los endpoints y asigna el controlador correspondiente
router.get('/book', bookController.getBook);
router.post('/book', bookController.createBook);
router.put('/book', bookController.updateBook);
router.delete('/book', bookController.deleteBook);

module.exports = router;

