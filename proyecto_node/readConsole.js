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

function readConsole (callback){

    rl.question('¿Cuál es tu nombre? ', (name) => {
        person.name=name; 
    
        rl.question('¿Cuál es tu apellido? ', (surname) => {
        person.surname =surname;
    
            rl.question('¿Cuál es tu edad? ', (age) => {
            person.age = age;

            callback(person);
            rl.close();

            })
        })    
    })
}

module.exports = { readConsole };