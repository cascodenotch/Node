const fs = require('fs');

let person = {
    name: "Catalina",
    surname:"Arciniegas",
    age:32,
}

fs.writeFile('person.json', JSON.stringify(person), (err) => {

    if (err){
        console.log("No se ha podido guardar el fichero")
    }
    else{
        console.log("Se ha creado el fichero");
    }
   
      fs.readFile('person.json', 'utf8', (err, data) => {

        if (err){
            console.log("No se ha podido leer el fichero")
        }
        else{
            console.log("Se ha leido el fichero");
        }

          const parsedPerson = JSON.parse(data);
          console.log(parsedPerson);
      });

  });

  