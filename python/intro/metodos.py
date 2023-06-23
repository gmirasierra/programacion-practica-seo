# String
ejemplo = 'Esto es un ejemplo'

minus = ejemplo.lower()
print(minus)

strlist = ejemplo.split(' ')
print(strlist)

rpl = ejemplo.replace('texto', 'ejemplo')

# Iterables / List
inc = 'ejemplo' in strlist
print(inc)

largo = len(strlist)

duplicated = strlist.copy()
print(duplicated)

strlist.append('de')
print(strlist)

strlist.remove('Esto')
print(strlist)