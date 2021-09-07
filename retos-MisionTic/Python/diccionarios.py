edad = {"Luis": 18, "Pepe": 19}

edad["Luis"] = 19

edad["Maria"] = 18

del(edad["Pepe"])

print(edad)

colores = {"Amarillo": 0, "Azul": 1, "Rojo": 2}

colores["Amarillo"] += 3
print(colores)

#===============================================================================
""" Definir listas y tuplas en un diccionario """

diccionario = {3: [1,2,3,4]}
print(diccionario[3][3])

semana = ("Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo")

diccionario2 = {
    semana[0]: "Era Festivo",
}

print(diccionario2[semana[0]])
print(diccionario2["Lunes"])

#===============================================================================
""" Diccionarios Sobre Diccionarios """

datos = {"Luis": {"edad": 18, "RH": "A+"}, "Carlos": {"edad": 17, "RH": "B+"}}

print(datos["Luis"]["RH"])

datos["Carlos"]["edad"] = 18

datos["Marleny"] = {"edad": 20, "RH": "O-", "Profesion": "Ingeniera"}
print(datos["Marleny"]["Profesion"])
