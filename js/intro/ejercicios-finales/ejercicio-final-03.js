// 3. He guardado el archivo `urls-ejercicio-final-03` en una variable para poder trabajar con el.
//   Vamos a:

console.log(listaDeUrls)

//   * Localizar cuantos tipos de valores existen en el atributo `robots`
const robtosValues = {};
listaDeUrls.forEach(url => {
    if(robtosValues[url.robots]) {
        robtosValues[url.robots]++
    } else {
        robtosValues[url.robots] = 1;
    }
})

console.log(robtosValues)

//   * Encuentra que slug tiene como valor en el robots: `aqui tenía que haber otra cosa no? :P`
const slugFiltered = listaDeUrls.find(url => url.robots === 'aqui tenía que haber otra cosa no? :P')
console.log(slugFiltered)

//   * Contabiliza cuantas urls se pueden indexar y cuantas no

const result = listaDeUrls
.filter(url => !url.robots.includes('noindex') && !url.robots.includes('aqui tenía que haber otra cosa no? :P'))
.length
console.log(result)

