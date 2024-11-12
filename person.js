const fs = require('fs');

let person = {
    name: "Catalina",
    surname:"Arciniegas",
    age:32,
}

fs.writeFile('person.json', JSON.stringify(person), (err) => {
   
      fs.readFile('person.json', 'utf8', (err, data) => {
          const parsedPerson = JSON.parse(data);
          console.log(parsedPerson);
      });

  });

  