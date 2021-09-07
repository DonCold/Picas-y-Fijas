import random

salarioMinino = 877802

""" Los Nombres Aqui Mencionados Fueron datos encontrados en Internet, Usados con el unico fin de cumplir el reto """

nomina = [
    ["Mauricio Figueroa Lozano", random.randint(18, 99), random.randint(1, 4), "M", salarioMinino],
    ["Corina Bueno Chacón", random.randint(18, 99), random.randint(1, 4), "F", salarioMinino],
    ["Zaida Costanza Sanchez Acevedo", random.randint(18, 99), random.randint(1, 4), "F", salarioMinino],
    ["Rosa Blanca Jaimes Ortega", random.randint(18, 99), random.randint(1, 4), "F", salarioMinino],
    ["Felix Ortiz Lemus", random.randint(18, 99), random.randint(1, 4), "M", salarioMinino],
    ["Wilson Alberto Contreras Espinosa", random.randint(18, 99), random.randint(1, 4), "M", salarioMinino],
    ["Heriberto Peña Pedraza", random.randint(18, 99), random.randint(1, 4), "M", salarioMinino],
    ["Ingrid Arias", random.randint(18, 99), random.randint(1, 4), "F", salarioMinino],
    ["Arnaldo de la Barrera Correa", random.randint(18, 99), random.randint(1, 4), "M", salarioMinino],
    ["Elgar Gualdrón", random.randint(18, 99), random.randint(1, 4), "M", salarioMinino],
    ["Juan Carlos López Carreño", random.randint(18, 99), random.randint(1, 4), "M", salarioMinino],
    ["Julio Cesar Monroy Parra", random.randint(18, 99), random.randint(1, 4), "M", salarioMinino],
    ["Rosalba Mendoza Suárez", random.randint(18, 99), random.randint(1, 4), "F", salarioMinino],
    ["Carmen Alida Granados", random.randint(18, 99), random.randint(1, 4), "F", salarioMinino],
    ["Esperanza Torres Maldonado", random.randint(18, 99), random.randint(1, 4), "F", salarioMinino],
]

nombres = []
edad = []
salario = []
porcentaje = []
dineroTotal = 0

for i in range(0, len(nomina)):
    salario.append(nomina[i][2]*nomina[i][4])
    nombres.append(nomina[i][0])
    edad.append(nomina[i][1])
    dineroTotal += salario[i]

""" Colores para Resaltar la Impresion de los datos """

CYAN = '\033[36m'
RED = '\033[31m'
RESET = '\033[39m'

""" Impresion de los Datos """

print("\n"+CYAN+"Datos:\n")
print(RED+'{:^40}{:^20}{:^15}{:^10}{:^15}'.format("Nombres", "Porcentaje de Dinero", "Salario", "Edad", "Genero"))

for i in range(0, len(nomina)):
    porcentaje.append(round((salario[i]/dineroTotal)*100, 2))
    print(RESET+'{:^40}{:^20}{:^15}{:^10}{:^15}'.format(nombres[i],str(porcentaje[i])+" %",salario[i], edad[i], nomina[i][3]))

salario.sort()
nombres.sort()
edad.sort(reverse=True)

print(CYAN+"\nDatos Ordenados:\n")
print(RED+'{:^40}{:^20}{:^20}'.format("Nombres En Orden Alfabetico", "Edad Descendente", "Salario Ascendete"))
for i in range(0, len(nomina)):
    print(RESET+'{:^40}{:^20}{:^20}'.format(nombres[i], edad[i],salario[i]))

print("")
print(CYAN+"Total de Dinero Gastado: "+RESET,dineroTotal)
print(CYAN+"Sueldo mas Alto: "+RESET,salario[-1])
print(CYAN+"Sueldo mas Bajo: "+RESET,salario[0])
print("")