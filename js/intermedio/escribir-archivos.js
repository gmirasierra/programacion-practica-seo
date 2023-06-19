const fs = require('fs');
const path = require('path');

const inputObj = require('./leer-archivos').inputObj;

inputObj['exportado'] = true;

// Escribir archivos
const rutaE = path.join(__dirname, '/archivos/schema.json')

fs.writeFileSync(rutaE, JSON.stringify(inputObj, ' ', 2), 'utf8');