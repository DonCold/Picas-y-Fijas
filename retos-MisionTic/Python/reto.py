""" Ingreso los Datos Recolectados por la empresa en esta semana """

diaSemana = ("Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado")
unidadesSemana = (20, 23, 15, 32, 31, 8)
precioUnidad = (3500, 3400, 3800, 3200, 3100, 4000)

""" Defino las variables a utilizar """
dineroSemana = ()
gananciaSemana = ()
totalUnidades = 0
dineroRecaudado = 0
totalGanancia = 0
porcentajeGanancia = 0.1 # resultado de hacer la operacion 10/100

"""itero segun los dias de la semana"""
for i in range(0,len(diaSemana)):
    """ se suma el dinero obtenido en cada dia y su ganancia adicionandolas a una tupla"""
    dineroSemana += ((unidadesSemana[i]*precioUnidad[i]),)
    gananciaSemana += (int(dineroSemana[i]*porcentajeGanancia),)

    """ Sumas para obtener la cantidad de unidades, la ganancia y el dinero total recaudado total."""
    totalUnidades += unidadesSemana[i]
    totalGanancia += gananciaSemana[i]
    dineroRecaudado += dineroSemana[i]

""" Imprimo los resultados obtenidos """

print("")
print("Total de Unidades Vendidas en la Semana:", totalUnidades)
print("Dinero Total Recaudado en la Semana:", dineroRecaudado)
print("Ganancia Total Obtenida en la Semana:",totalGanancia)
print("")
for i in range(0,len(diaSemana)):
    print("El dia", diaSemana[i],
        "vendimos", unidadesSemana[i],
        "unidades con un precio total de", dineroSemana[i],
        "y una ganancia de", gananciaSemana[i]
    )
print("")