const fs = require('fs/promises');

let person1 = {
    name: "Catalina",
    surname:"Arciniegas",
    age:32,
}

let person2 = {
    name: "Paula",
    surname:"Muñoz",
    age:22,
}

// Con then y catch 

fs.writeFile ("person.json", JSON.stringify(person1))
.then (()=>{
    console.log("Fichero creado");
    return fs.readFile ("person.json","utf-8");
})
.then ((dato) => {
    console.log ("Fichero leido");
    console.log (dato);
})
.catch ((error)=>{
    console.log ("Hay un error");
    console.log (error);
}
)

// Con async await

async function writeAndRead(){
    try{
        await fs.writeFile ("person.json", JSON.stringify(person2));
        console.log ("Se ha creado el fichero");
        const dato = await fs.readFile ("person.json", "utf-8");
        console.log ("Se ha leido el fichero");
        console.log (dato);
    }
    catch (error){
        console.log("Hay un error");
        console.log(error);
    }
}

writeAndRead();