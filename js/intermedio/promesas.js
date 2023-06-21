// promisify
const connectDB = new Promise((resolve, reject) => {
    setTimeout (() => {
        resolve('conectado a base de datos')
    }, 2000)
})

// Cómo trabajar con promesas

// Then
connectDB
    .then(msg => console.log(msg))
    .catch(err => console.log(err))


// Async await
async function connect() {
    const msg = await connectDB;
    console.log(msg)
    return msg;
}

console.log(connect());