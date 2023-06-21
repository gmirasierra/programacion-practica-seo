# Crear listas
listaEjemplo = ['pantalla', 'teclado', 'internet']

#Acceder a un elemento
listaEjemplo[0]

#Rangos
listaEjemplo[0:1]

#Cambiar un elemento
listaEjemplo[1] = 'altavoz'

# Loop
for elemento in listaEjemplo:
    print(elemento)

#Chequear si existe
if 'pantalla' in listaEjemplo:
    print('Existe')

# Largo
print(len(listaEjemplo))

# Añadir elementos
listaEjemplo.append('sonido')
print(listaEjemplo)


listaEjemplo.insert(1,'teclado')
print(listaEjemplo)


# Eliminar elemento
listaEjemplo.remove('teclado')
print(listaEjemplo)

del listaEjemplo[0]
print(listaEjemplo)

# Eliminar lista
#del listaEjemplo
print(listaEjemplo)

# Vaciar la lista
#listaEjemplo.clear()
print(listaEjemplo)

# Unir dos listas
otraLista = ['chicles', 'fruta']

nuevaLista = listaEjemplo + otraLista
print(nuevaLista)
