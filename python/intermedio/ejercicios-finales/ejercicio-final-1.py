# 1. Crea un script que abra un listado de páginas al ejecutarse

import webbrowser

urls = {
    'https://www.mundodeportivo.com',
    'https://www.marca.com',
    'https://www.as.com',
    'https://www.sport.es'
}

for url in urls:
    webbrowser.open_new(url)