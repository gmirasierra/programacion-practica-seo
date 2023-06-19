const arr = [1,2,3,4];

//rest
const [ uno, dos, ...resto] = arr;

console.log(resto);


//spread

function sum(x, y, z) {
    return x+y+z;
}

console.log(sum(...arr));