const readline = require('readline/promises');

let person = {
    name: "",
    surname:"",
    age:0,
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

//   Con then y catch 

rl.question('¿Cuál es tu nombre?')
.then ((name)=>{
    person.name = name;
    return rl.question ('¿Cuál es tu apellido?')
})
.then ((surname)=>{
    person.surname =surname;
    return rl.question ('¿Cuál es tu edad?')
})
.then ((age)=>{
    person.age =age;
    console.log(person);
    rl.close();
})
.catch ((error)=>{
    console.log (error);
    rl.close;
}
)

// Con async await

async function readConsole () {
    try {
        person.name = await rl.question('¿Cuál es tu nombre?');
        person.surname = await rl.question ('¿Cuál es tu apellido?');
        person.age = await rl.question ('¿Cuál es tu edad?');
        console.log (person);
        rl.close
    }
    catch (error){
        console.log ("Hay un error");
        console.log (error);
    }
} 

readConsole();