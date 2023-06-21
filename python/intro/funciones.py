# Declarar función
def fnEjemplo(args):
    #Lógica de la función
    return

def sum(a,b=2):
    return a+b

# Built-in functions
# print()
# len()

# Ejecutar una función
#print(sum(1,2))

# Default parameter
# def sum(a, b=2)

# *args
def sumAll(*args):
    for i in args:
        print(i)
    
print(sumAll(1,2,3,4))

# **kwargs
def ejemplo(a,b,**kwargs):
    print(kwargs)
    
print(ejemplo(a=1, b=4, z=34))

#Lambda
x = lambda a: a*2
print(x(2))