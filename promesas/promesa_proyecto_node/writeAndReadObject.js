const fs = require('fs/promises');

// con then y catch

// function writeAndRead (path, obj) {
// fs.writeFile (path, JSON.stringify(obj))
// .then (()=>{
//     console.log("Fichero creado");
//     return fs.readFile ("person.json","utf-8");
// })
// .then ((dato) => {
//     console.log ("Fichero leido");
//     console.log (dato);
// })
// .catch ((error)=>{
//     console.log ("Hay un error");
//     console.log (error);
// })

// }

// con async await 

async function writeAndRead(path, obj){

    try{
        await fs.writeFile (path, JSON.stringify(obj));
        console.log ("Se ha creado el fichero");
        const dato = await fs.readFile (path, "utf-8");
        console.log ("Se ha leido el fichero");
        console.log (dato);
    }
    catch (error){
        console.log("Hay un error");
        console.log(error);
    }
}

module.exports = {writeAndRead};