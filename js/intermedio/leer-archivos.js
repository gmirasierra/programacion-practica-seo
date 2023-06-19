const fs = require('fs');
const path = require('path');

// Leer archivos
const rutaR = path.join(__dirname, '/archivos/schema.json')
const input = fs.readFileSync(rutaR, 'utf-8');

const inputObj = JSON.parse(input)
inputObj['modificado'] = true;

module.exports = {
    inputObj
}
