# 1. Crea una función llamada slugify que transforme un string (input) en una URL amigable para SEO (output). 
# slugify(texto)
# Caracteres que se pueden tener en cuenta: àáäâèéëêìíïîòóöôùúüûñç·/_,:;
# Ejemplos:
#   * ' que significan los sueños' --> '/que-significan-los-suenos'
#   * 'qué hacer después de programar' --> '/que-hacer-despues-de-programar'

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

def slugify(texto):
    
    caracteres = texto.lower().strip()
    
    letrasBuenas = list(map(iterReplace, caracteres))
    return ''.join(letrasBuenas)

slugify('Qué hacer después de cagar')