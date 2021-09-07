""" Tipos de aplicaciones """
# nombres de los estudiantes de un curso
# definir en cada rango de la lista los datos de un solo estudiante
# almacenar datos para operar con ellos como notas para realizar un promedio
# guardar los datos obtenidos del usuario en un juego
# lista de llegada de una persona, para controlar la entrada y salida de estos

num=1

if(num==1):
    """ Funciones con listas """
    lista = [5, 20, 5, 5, 2, 9, 1, 12, 6, 8, 3, 4, 5 , 2, 9, 1, 12, 6, 8, 3]

    print(lista.index(20))
    print(lista.count(5))
    print(lista.sort())
    print(lista.pop(1))
    copialista = lista.copy()
    print(lista.clear())
    print(len(copialista))
    print(copialista.append(12))
    print(lista.append(13))
    print(copialista.insert(0, 19))
    print(copialista.extend(lista))
    print(copialista.remove(20))
    print(copialista)

if(num==2):
    """ Encuentra el Error """

    Posiciones = list()
    # Insertamos algunas demarcaciones
    Posiciones.append('Delantero')
    Posiciones.append('Portero')
    Posiciones.append('Defensa')
    Posiciones.append('Centro Campista')
    print(Posiciones)
