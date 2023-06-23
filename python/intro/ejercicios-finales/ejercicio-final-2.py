# 2. Añade un parámetro a la función para poder pasarle un listado de stopwords. 
#   slugify(texto, ['de','que','los'])
#   Ejemplos:
#   * ' que significan los sueños' --> '/significan-suenos'
#   * 'qué hacer después de programar' --> '/hacer-despues-programar'

mapping = {
    '-': [' ', '/','_',',',':',';'],
    'a': ['à','á','ä','â'],
    'e': ['è','é','ë','ê'],
    'i': ['ì','í','ï','î'],
    'o': ['ò','ó','ö','ô'],
    'u': ['ù','ú','ü','û'],
    'n': ['ñ'],
    'c': ['ç']
}

def iterReplace(letter):
  for key, value in mapping.items():
    if letter in value:
      return key
  return letter

def slugify(texto, stopwords):
    
    caracteres = texto.lower().strip()
    
    if stopwords:
        for stopword in stopwords:
            caracteres = caracteres.replace(' ' + stopword + ' ', ' ')
    
    
    letrasBuenas = list(map(iterReplace, caracteres))
    return ''.join(letrasBuenas)