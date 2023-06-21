//   2. Con la función promisificada, importala y consulta el archivo ejercicio.csv.
// Para hacerlo crea una función llamada read() y exportala

const { readFilePromisified } = require('./ejercicio-final-01');
const path = require('path')

module.exports = async function read(path) {
    const data = await readFilePromisified(path, 'utf-8');
    return data;
}