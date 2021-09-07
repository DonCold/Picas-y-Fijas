RED = '\033[31m'
RESET = '\033[39m'
cerrar = False

""" Variables De Votación """
codigoEstudiante = -1
A = 0
B = 0
N = 0

baseDatos = {
    "estudiante": [
        "Alexandra Torres",
        "Luz Florez",
        "Luis Osorio",
        "Irune Ferreiro",
        "Laia Barrera",
        "Souad Egea",
        "Joaquim Campos",
        "Mireia Haro",
        "Montserrat Jara",
        "Clara Leal",
    ],
    "codigo": [
        10980,
        13452,
        12345,
        14785,
        12365,
        15984,
        85262,
        96582,
        36952,
        14256,
    ]
}

def ganador():
    global A,B,N
    print("")
    print("")
    print("")
    print("")
    if A > B:
        print(RED+"El Candidato A Gano Esta Eleccion con"+RESET, A, "Votos")
    elif B > A:
        print(RED+"El Candidato B Gano Esta Eleccion con"+RESET, B, "Votos")
    elif N > A and N > B:
        print(RED+"Gano el voto en blanco, GG"+RESET)
    else:
        print(RED+"Hubo Un Empate entre los 2 candidatos"+RESET)
    print("")
    print("El Candidato A obtuvo; ", A, "Votos")
    print("El Candidato B obtuvo; ", B, "Votos")
    print("Votos en Blanco; ", N)

def votacion(codigo):
    global A,B,N
    print("")
    print("")
    print("")
    print("")
    print("Bienvenid@ "+baseDatos["estudiante"][codigo])
    print("")
    print("Si Presiona Otra letra Tambien se tomara como Voto en Blanco")
    print("Seleccione A si desea votar por el candidato A, la tecla B por el candidato B, o la tecla 0 para voto en blanco.")
    voto = input("=> ")
    voto = voto.lower()
    if voto == "a":
        A += 1
    elif voto == "b":
        B += 1
    else:
        N += 1
    print("")
    print(RED+"Muchas Gracias por su Voto"+RESET)
    print("")
    print("")
    print("")
    print("")

def validar(codigo):
    global codigoEstudiante
    for estud in range(len(baseDatos["codigo"])):
        if codigo == baseDatos["codigo"][estud]:
            codigoEstudiante = estud
            return True
    return False

print(RED+"Dia de Elección Estudiantil"+RESET)
while cerrar==False:
    codigo = input("Ingrese Su Codigo Para Votar (El Supervisor Digita Una Letra para Finalizar La Votación): ")
    try:
        codigo = int(codigo)
    except:
        print(RED+"Cerrando Sección"+RESET)
        break
    if validar(codigo):
        votacion(codigoEstudiante)
    else:
        print(RED+"Usuario No Encontrado"+RESET)

ganador()
