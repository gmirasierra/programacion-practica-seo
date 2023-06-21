//   3. Importa la función anterior y parsea el csv usando un modulo de node (https://www.npmjs.com/package/neat-csv)
// haz todo el proceso de instalación, require y ejecución con el objetivo final de mostrarlo en consola.

const neatCsv = require('neat-csv')
const read = require('./ejercicio-final-02');
const path = require('path')

async function readCSV() {
    const data = read(path.join(__dirname, '../archivos/ejercicio.csv'));
    const csvFile = await neatCsv(data);
    console.log(csvFile);
}

readCSV();