const Book = require('../models/Book');

let arrayBooks = [];
let bookInstance = null; 

function getAllBooks(request, response)
{
    let respuesta;
    if (arrayBooks.length > 0) 
        respuesta = arrayBooks;
    else
        respuesta = {error: true, codigo: 200, mensaje: "No hay libros"}
    
    response.send(respuesta);   
};

function addBook(request, response) {   
    let respuesta; 
    let bookId = request.body.id_book;
    let bookExists = false;  

    arrayBooks.forEach(book => {
        if (book.id_book === bookId) {
            bookExists = true;
        }
    });

    if (bookExists) {
        respuesta = { error: true, codigo: 200, mensaje: 'Libro ya existe' };
    } else { bookInstance = new Book(
            request.body.id_book, 
            request.body.id_user,
            request.body.title,
            request.body.author, 
            request.body.price,
            request.body.photo
        );
        
        arrayBooks.push(bookInstance);
        respuesta = { error: false, codigo: 200, mensaje: 'Libro añadido', data: arrayBooks };
    }

    response.send(respuesta); 
}

module.exports = {getAllBooks, addBook};