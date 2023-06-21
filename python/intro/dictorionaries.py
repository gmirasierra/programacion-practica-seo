# Crear
ejemploDict = {
    'a': 3,
    'b': 0,
    'z': 34
}

# Acceder a un elemento
print(ejemploDict['a'])

# Loop
for elemento in ejemploDict:
    print(ejemploDict[elemento])
    
# Items & Values
ejemploDict.keys()
ejemploDict.values()

print(ejemploDict.items())

#Chequear si existe
if 'a' in ejemploDict:
    print('Existe')
    
# Añadir un elemento
ejemploDict['y'] = 16
print(ejemploDict)

# Eliminar elemento
del ejemploDict['y']
print(ejemploDict)