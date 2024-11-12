const fs = require('fs');
const readline = require('readline');

let person = {
    name: "",
    surname:"",
    age:0,
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question('¿Cuál es tu nombre? ', (name) => {
    person.name=name; 

    rl.question('¿Cuál es tu apellido? ', (surname) => {
    person.surname =surname;

        rl.question('¿Cuál es tu edad? ', (age) => {
        person.age = age;

            fs.writeFile('crearpersona.json', JSON.stringify(person), (err) => {
       
                fs.readFile('crearpersona.json', 'utf8', (err, data) => {
                const parsedPerson = JSON.parse(data);
                console.log(parsedPerson);

                rl.close();
              })
            })
        })
    })
})
            
        