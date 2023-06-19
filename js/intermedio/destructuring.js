const { inputObj } = require('./leer-archivos');

const { name:example } = inputObj;

console.log(example)



const arr = [1,2,3,4];

const [ uno, dos, ...resto] = arr;

console.log(uno, dos, resto)