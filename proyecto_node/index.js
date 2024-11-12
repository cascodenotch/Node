const { writeAndRead } = require('./writeAndReadObject');
const { readConsole } = require('./readConsole');

const filePath = 'person.json';

readConsole((person)=>writeAndRead(filePath, person));