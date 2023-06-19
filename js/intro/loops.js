// Iteración en arrays
const arr = [1,2,3,4,5,6,7];

//For
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

for(let item of arr) {
    console.log(item)
}

//While
let  x = 0;
const y = 10;
do {
    console.log(x)
    x++;
} while (x < y)

while (x > y) {
    //Igual que el anterior
}


//Métodos
arr.forEach(i => console.log(i))

arr.map(item => item + 1)

arr.filter(item => item > 5)

arr.reduce((acc, actual) => acc + actual)


//Iteración en objetos
const miObjeto = {
    title: '',
    slug: '/url-1',
    indexable: true,
    h1: 'h1 de la url 1',
    h2: [
        'lorem',
        'ipsum',
        'dolor'
    ],
    inlinks: 24
}

// for
for (let key in miObjeto) {
    console.log(miObjeto[key]);
}


// Object
const keys = Object.keys(miObjeto)
const values = Object.values(miObjeto)
const entries = Object.entries(miObjeto)