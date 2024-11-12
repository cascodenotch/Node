const fs = require('fs');

function writeAndRead (path, obj) {

    fs.writeFile(path, JSON.stringify(obj), (err) => {
   
        fs.readFile(path, 'utf8', (err, data) => {
            const parsedPerson = JSON.parse(data);
            console.log(parsedPerson);
        });
    });
}

module.exports = { writeAndRead };