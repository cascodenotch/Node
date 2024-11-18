const Book = require('../models/Book');

let arrayBooks = [];
let bookInstance = null; 

function getAllBooks(request, response){

    console.log("end point funciona");

    let respuesta;
    if (arrayBooks.length > 0) 
        respuesta = { error: false, codigo: 200, data: arrayBooks }; 
    else
        respuesta = {error: true, codigo: 404, mensaje: "No hay libros"}
    
    response.send(respuesta);   
};

function addBook(request, response){   

    console.log("end point funciona");

    let respuesta; 
    let bookId = request.body.id_book;
    let bookExists = false;  

    arrayBooks.forEach(book => {
        if (book.id_book === bookId) {
            bookExists = true;
        }
    });

    if (bookExists) {
        respuesta = { error: true, codigo: 400, mensaje: 'Libro ya existe' };
    } 
    else { bookInstance = new Book(
            request.body.id_book, 
            request.body.id_user,
            request.body.title,
            request.body.author, 
            request.body.price,
            request.body.photo
        );
        
        arrayBooks.push(bookInstance);
        console.log('Nuevo libro:', bookInstance);
        respuesta = { error: false, codigo: 201, mensaje: 'Libro añadido', data: arrayBooks };
    }

    response.send(respuesta); 
}

function updateBook(request, response) {

    console.log("end point funciona");

    let respuesta;
    let bookId = request.body.id_book;
    let bookExists = false;

    arrayBooks.forEach(book => {
        if (book.id_book === bookId) {
            bookExists = true;
        
            book.id_user = request.body.id_user;
            book.title = request.body.title;
            book.author = request.body.author;
            book.price = request.body.price;
            book.photo = request.body.photo;

            respuesta = { error: false, codigo: 200, mensaje: 'Libro actualizado', data: book};
        }
    });

    if (!bookExists) {
        respuesta = { error: true, codigo: 404,mensaje: 'No existe ese Id'};
    }
    response.send(respuesta);
}

function deleteBook (request, response){

    console.log("end point funciona");
   
    let respuesta;
    let bookId = request.body.id_book;
    let arrayFiltrado = arrayBooks.filter(book => (book.id_book != bookId))

    if (arrayBooks.length != arrayFiltrado.length){
        arrayBooks = arrayFiltrado;
        respuesta= {error: false,codigo: 200, mensaje: 'Libro eliminado', data:arrayBooks};
    }
    else {
        respuesta= {error: true, codigo: 404, mensaje: 'No se encontró un libro con ese id', data:arrayBooks};
    }
    response.send(respuesta)
}

function getOneBook(request, response) {
    
    console.log("end point funciona");
    
    let respuesta;
    let bookId = parseInt(request.params.id_book);
    let book = arrayBooks.find(book => book.id_book === bookId);

    if (book) {
        respuesta = {error: false, codigo: 200, data: book};
    } else {
        respuesta = {error: true, codigo: 404, mensaje: 'No se encontró un libro con ese id'};
    }

    response.send(respuesta);
}

module.exports = {getAllBooks, addBook, updateBook, deleteBook, getOneBook};