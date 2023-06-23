def pedir_edad():
    edad = int(input("¿Cuántos años tienes \n"))
    if edad > 31:
        print('Eres mayor que yo')
    elif edad < 31:
        print('Eres menor que yo')
    else:
        print('Tenemos la misma edad')