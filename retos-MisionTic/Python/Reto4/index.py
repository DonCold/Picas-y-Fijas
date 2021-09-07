from clases import usuarios, Administracion, Facturacion, numFactura, RED, RESET

#variables globales
encontrado = False
nombre = ""
contra = ""
tipo = ""
usuario = ""

""" ===========================================Menu de Opciones============================================= """

def administracion():
    global usuario
    print("\n\n\n")
    print("Menu de Opciones")
    print(" 1: Ver Cuenta de Usuario")
    print(" 2: Ver Factura")
    print(" 3: Editar Factura")
    print(" 4: Eliminar Factura")
    print(" 5: Cerrar Sección")
    res = input("=> ")
    print("\n\n\n")
    if res == "1":
        usuario.verCuenta()
        input("\n\nDar Enter para continuar: ")
        administracion()

    elif res == "2":
        usuario.verFactura()
        input("\n\nDar Enter para continuar: ")
        administracion()

    elif res == "3":
        usuario.editarFactura()
        input("\n\nDar Enter para continuar: ")
        administracion()

    elif res == "4":
        usuario.eliminarFactura()
        input("\n\nDar Enter para continuar: ")
        administracion()

    elif res == "5":
        print(RED+"Hasta la Proxima!!"+RESET)
        exit()
        administracion()


    else:
        administracion()

def facturacion():
    global usuario
    print("\n\n\n")
    print("Menu de Opciones")
    print(" 1: Ver Cuenta de Usuario")
    print(" 2: Consultar Factura")
    print(" 3: Crear Nueva Factura")
    print(" 4: Cerrar Sección")
    res = input("=> ")
    print("\n\n\n")
    if res == "1":
        usuario.verCuenta()
        input("\n\nDar Enter para continuar: ")
        facturacion()

    elif res == "2":
        usuario.verFactura()
        input("\n\nDar Enter para continuar: ")
        facturacion()

    elif res == "3":
        usuario.crearFactura()
        input("\n\nDar Enter para continuar: ")
        facturacion()

    elif res == "4":
        usuario.cerrarSeccion()
        exit()
        facturacion()

    else:
        facturacion()

def inicio():
    global usuario
    if tipo == "administrativo":
        usuario = Administracion(nombre, contra)
        administracion()
    elif tipo == "facturacion":
        usuario = Facturacion(nombre, contra)
        facturacion()

""" ===========================================LOGIN========================================================= """

def verificacion(nombre):
    global encontrado
    encontrado = False
    for serch in usuarios:
        if serch == nombre:
            encontrado = True
            break
    if encontrado:
        return True
    else:
        return False

def login():
    global encontrado, nombre, contra, tipo
    if encontrado == False:
        print("Supermercado Super Baratón\n\n")
        print("Bienvenido.")

        print("Ingrese su Nombre:")
        nombre = input("=> ")
        print("Ingrese su Contraseña:")
        contra = input("=> ")

        nombre = nombre.capitalize()

    if verificacion(nombre):
        if usuarios[nombre][0] == contra:
            if usuarios[nombre][1]=="administrativo":
                tipo = "administrativo"
            elif usuarios[nombre][1]=="facturacion":
                tipo = "facturacion"
            inicio()
        else:
            encontrado = False
            print(RED+"Contraseña Incorrecta"+RESET)
            print("\n\n\n")
            login()
    else:
        print(RED+"Este Usuario No Existe,"+RESET+" Desea Registrarse?")
        res = input("s/n : ")
        if res=="s":
            while res!="null":
                print("Es Administrador(A) o de Facturación(F) ?")
                res = input("=> ")
                res = res.upper()
                if res == "A":
                    tipo = "administrativo"
                    break
                elif res == "F":
                    tipo = "facturacion"
                    break
                else:
                    continue
            usuarios[nombre] = [contra, tipo]
            inicio()
        else:
            print("\n\n\n")
            login()

login()
