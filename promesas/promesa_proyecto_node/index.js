const { writeAndRead } = require('./writeAndReadObject');
const { readConsole } = require('./readConsole');

const filePath = 'person.json';

// con then y catch

// function index (){
// readConsole()
// .then ((datosLeidos) => {
//     writeAndRead (filePath, datosLeidos);
// })
// .catch ((error)=>{
//     console.log ("Hay un error");
//     console.log (error);
// })
// }

// index();

// con async await 

async function index (){
    try{
        let datosLeidos = await readConsole();
        await writeAndRead(filePath, datosLeidos);
    }
    catch (error){
        console.log (error);
    }
}

index();


