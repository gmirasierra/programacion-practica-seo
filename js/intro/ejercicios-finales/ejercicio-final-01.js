//# Ejercicios finales JS básico
// 1. Crea una función llamada slugify que transforme un string (input) en una URL amigable para SEO (output). 
// slugify(texto)
// Caracteres que se pueden tener en cuenta: àáäâìíïîòóöôùúüûñç·/_,:;
// Ejemplos:
//   * ' que significan los sueños' --> '/que-significan-los-suenos'
//   * 'qué hacer después de programar' --> '/que-hacer-despues-de-programar'

const mapping = {
    '-': [' ', '/','_',',',':',';'],
    'a': ['à','á','ä','â'],
    'e': ['è','é','ë','ê'],
    'i': ['ì','í','ï','î'],
    'o': ['ò','ó','ö','ô'],
    'u': ['ù','ú','ü','û'],
    'n': [['ñ']],
    'c': ['ç']
}

function slugify(string) {

    const caracteres = string.toLowerCase().split('')

    const letrasBuenas = caracteres.map(letra => {
        for(const [key,value] of Object.entries(mapping)) {
            if (value.includes(letra)) {
                return key;
            }
            return letra;
        }
    })

    return letrasBuenas
        .join('')
        .replace(/-{2,}/g, '-')
        .replace(/^-|-$/g, '')
        .trim()
}