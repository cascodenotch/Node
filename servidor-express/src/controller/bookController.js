const Book = require('../models/Book');

let bookInstance = null;

function getBook(request, response)
{
    let respuesta;
    if (bookInstance != null) 
        respuesta = bookInstance;
    else
        respuesta = {error: true, codigo: 200, mensaje: "El libro no existe"}
    
    response.send(respuesta);   
};

function createBook(request, response)
{
    let respuesta; 
    console.log(request.body)
    if (bookInstance === null)
    {
        bookInstance = new Book (request.body.id_book, 
        request.body.id_user,
        request.body.title,
        request.body.author, 
        request.body.price,
        request.body.photo,
        )
        
        respuesta   = {error: false, codigo: 200, 
                        mensaje: 'Libro creado',data: bookInstance};
    }
    else
        respuesta = {error: true, codigo: 200, 
                        mensaje: 'Libro ya existe'};

    response.send(respuesta);
};

function updateBook(request, response)
{
    let respuesta
    if (bookInstance !=  null)
    {
        bookInstance.id_user  = request.body.id_user;
        bookInstance.id_user = request.body.id_user,
        bookInstance.title = request.body.title,
        bookInstance.author = request.body.author, 
        bookInstance.price = request.body.price,
        bookInstance.photo = request.body.photo,
    
        respuesta  = {error: false, codigo: 200, 
                        mensaje: 'Libro actualizado',data: bookInstance};
    }
    else
        respuesta = {error: true, codigo: 200, 
                        mensaje: 'El libro no existe',data: bookInstance};

    response.send(respuesta);
};

function deleteBook(request, response)
{
    let respuesta
    if (bookInstance != null)
    {    
        bookInstance     = null;
        respuesta   = {error: false, codigo: 200, 
                        mensaje: 'Libro borrado',data: bookInstance};
    }  
    else
        respuesta   = {error: true, codigo: 200, 
                        mensaje: 'El libro no existe',data: bookInstance};

    response.send(respuesta);
};

module.exports = { getBook, createBook, updateBook, deleteBook };