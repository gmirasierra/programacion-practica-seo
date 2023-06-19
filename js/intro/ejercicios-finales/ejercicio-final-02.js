// 2. Añade un parámetro a la función para poder pasarle un listado de stopwords. 
//   slugify(texto, ['de','que','los'])
//   Ejemplos:
//   * ' que significan los sueños' --> '/significan-suenos'
//   * 'qué hacer después de programar' --> '/hacer-despues-programar'

const mapping = {
    '-': [' ', '/','_',',',':',';'],
    'a': ['à','á','ä','â'],
    'e': ['è','é','ë','ê'],
    'i': ['ì','í','ï','î'],
    'o': ['ò','ó','ö','ô'],
    'u': ['ù','ú','ü','û'],
    'n': ['ñ'],
    'c': ['ç']
}

function slugify(string, stopwords) {

    let caracteres = string.toLowerCase();

    if(stopwords) {
        stopwords.forEach(stopwrod => {
            caracteres = caracteres.replace(`${stopword}`,' ')
        });
    }

    caracteres = caracteres.split('')

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