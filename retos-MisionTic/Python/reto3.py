""" Definiendo variables de colores para python"""

RED = '\033[31m'
GREEN = '\033[32m'
CYAN = '\033[36m'
RESET = '\033[39m'


"""  Desarrollo del programa """

error = True
while error==True:
    nombre = str(input(GREEN+"Ingrese el nombre del Cliente: "+RESET))
    numero = int(input(GREEN+"Ingrese el numero de 6 Digitos Asignado: "+RESET))
    print("")

    cliente = []

    # Este While separa los numeros ingresados en una lista
    i = 0
    while numero > 0:
        i = i + 1
        resto = numero % 10
        numero = int(numero / 10)
        cliente.append(resto)

    cliente.reverse()
    cliente.insert(0,nombre)

    if(len(cliente)==7):
        if(cliente[1]==1 or cliente[1]==2):
            if(cliente[4]==1 or cliente[4]==2 or cliente[4]==3):
                error = False
            else:
                print(RED+"** El cuarto Digito solo puede ser 1, 2 o 3 **"+RESET)
        else:
            print(RED+"** El primer Digito solo puede ser 1 o 2 **"+RESET)
    else:
        print(RED+"** El numero debe ser de 6 Digitos **"+RESET)

# Apartir de aqui ya tengo la lista completa, y solo queda operar con los datos

print(CYAN+"Lista: ", cliente,RESET)
print("")
print("LOS MAGIOS")
print("")
print(CYAN+"Nombre del Cliente:"+RESET, cliente[0])

if(cliente[1]==1):
    print(CYAN+"Tipo de Cliente:"+RESET+" Afiliado")
elif(cliente[1]==2):
    print(CYAN+"Tipo de Cliente:"+RESET+" Particular")

edad = int(str(cliente[2]) + str(cliente[3]))
print(CYAN+"Edad del Cliente:",RESET, edad, "Años")

saldo = 0

if(cliente[4]==1):
    saldo = 500000
    print(CYAN+"Servicio Utilizado:"+RESET+" Deportes")
if(cliente[4]==2):
    saldo = 870000
    print(CYAN+"Servicio Utilizado:"+RESET+" Artes y Música")
if(cliente[4]==3):
    saldo = 1230000
    print(CYAN+"Servicio Utilizado:"+RESET+" Gastronomía")

suma = cliente[5]+cliente[6]
descuento = 0

# al usar (suma%2)==0 estoy buscando si el reciduo de dividir la suma entre 2 es 0, con esto se sabe si es un numero par
if((suma%2)==0):
    descuento += 10
else:
    descuento += 20

print(CYAN+"Porcentaje de Descuento:",RESET,str(descuento)+"%")

if(edad<15 and cliente[1]==1):
    descuento += 5
    print(RED+"Se aplico descuento de 5% por ser menor de 15 años y estar Afiliado"+RESET)
elif(edad>50 and cliente[1]==1):
    descuento += 25
    print(RED+"Se aplico descuento de 25% por ser Mayor de 50 años y estar Afiliado"+RESET)
elif(edad>30 and cliente[1]==2):
    descuento += 10
    print(RED+"Se aplico descuento de 10% por ser Mayor de 30 años y ser Particular"+RESET)
else:
    print(RED+"El Cliente ", cliente[0], " no aplica a descuentos adicionales"+RESET)

descuento /= 100
descuento *= saldo
saldo -= descuento
saldo = int(saldo)

print(CYAN+"Valor a Pagar:",RESET, saldo)