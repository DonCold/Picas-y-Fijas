from basedatos import baseDatos as db

""" Variables Globales """
RED = '\033[31m'
RESET = '\033[39m'
numFactura = len(db)
crearFactura = False
saldoDia = 0
variableSaldo = 0

usuarios = {
    "Luis": [
        "administrar", #Contraseña
        "administrativo",
    ],
    "Fernando": [
        "facturar", #Contraseña
        "facturacion",
    ]
}

class Usuario:
    def __init__(self, nombre, contra):
        self.nombre = nombre
        self.contra = contra

    def imprimirFactura(self, res):
        global variableSaldo
        for factura in db:
            if factura == res:
                lista = list(db[factura].items())
                print("\n\n============================="+RED+"SUPERMERCADO SUPER BARATON"+RESET+"=================================")
                print("\nCliente:", lista[0][1], "\t\tNumero de Factura:", factura)
                print("Cedula:", lista[0][0])
                print("----------------------------------------------------------------------------------------")
                print('{:^10}{:^30}{:^10}{:^10}{:^15}{:^15}'.format("Codigo","Descripcion","Cantidad","Iva","Valor Unitario", "Valor Total"))
                print("----------------------------------------------------------------------------------------")
                subtotal = 0
                total = 0
                iva = []
                for num in lista:
                    if num != lista[0]:
                        if num[1][3] != 0:
                            valorBase = int((num[1][2]*num[1][1])/float("1."+str(num[1][3])))
                            valorBase = (num[1][2]*num[1][1])-valorBase
                            listaBorrador = [num[1][3], valorBase]
                            subtotal-= valorBase
                            iva.append(listaBorrador)
                        subtotal += num[1][2]*num[1][1]
                        print('{:^10}{:^30}{:^10}{:^10}{:^15}{:^15}'.format(num[0],num[1][0],num[1][2],num[1][3],num[1][1], num[1][2]*num[1][1]))
                print("________________________________________________________________________________________")
                print("\t\t\t\t\t\t\t\t\tSubtotal:",subtotal)
                for i in iva:
                    print("\t\t\t\t\t\t\t\t\tIva "+str(i[0])+"%:", i[1])
                    total += i[1]
                total += subtotal
                variableSaldo = total
                print("\t\t\t\t\t\t\t\t\tTotal:",total)
                print("========================================================================================")

    def verFactura(self):
        self.listaFacturas()
        print("\nIngrese el codigo de la Factura")
        res = input("=> ")
        self.imprimirFactura(res)

    def verCuenta(self):
        print('Nombre: {} \t\tTipo Usuario: {}'.format(self.nombre, usuarios[self.nombre][1]))

    def convertirNumero(self, num):
        try:
            num = int(num)
        except:
            num = "error"
            print(RED+"El dato ingresado no corresponde a un numero"+RESET)
        return num

    def listaFacturas(self):
        print("Lista de Facturas: ")
        for factura in db:
            print("-",factura)

# ==========================================================Clase Facturacion=======================================================
class Facturacion(Usuario):
    def crearFactura(self):
        global numFactura, crearFactura, saldoDia, variableSaldo
        numFactura += 1
        if numFactura<10:
            num = "00"+str(numFactura)
        elif numFactura<100:
            num = "0"+str(numFactura)
        else:
            num = numFactura
        print("Factura Numero:",num)
        cliente = input("Ingrese el Nombre del Cliente: ")
        documento = input("Ingrese el Numero de documento del Cliente: ")

        db[num] = {
            documento: cliente,
        }
        crearFactura = True
        while True:
            self.imprimirFactura(num)
            print(RED+"Recuerde que una vez Finalizada la inserción de los datos, solo el Administrador podra adicionar productos"+RESET)
            print("Desea Agregar un producto?")
            res = input("s/n: ")
            print("\n\n\n")
            if res == "s":
                self.agregarProducto(num)
            else:
                self.imprimirFactura(num)
                saldoDia += variableSaldo
                print(RED+"**Factura Creada**"+RESET)
                break

    def agregarProducto(self, num):
        print(RED+"*Agregar Un Producto*"+RESET)
        codigo = input("Codigo del Producto: ")
        descripcion = input("Descripcion del Producto: ")
        while True:
            precio = input("Costo de cada unidad: ")
            precio = self.convertirNumero(precio)
            if precio!="error":
                break
        while True:
            unidades = input("Cantidad de unidades: ")
            unidades = self.convertirNumero(unidades)
            if unidades!="error":
                break
        while True:
            iv = input("Iva del producto: ")
            iv = self.convertirNumero(iv)
            if iv!="error":
                break
        db[num][codigo] = [descripcion,precio,unidades,iv]
        print("\n\n\n*Dato Agregado*")

    def cerrarSeccion(self):
        global numFactura, crearFactura, saldoDia
        print(RED+"\n\n\n\n\n**Cerrando Seccion**\n\n"+RESET)
        if crearFactura:
            if numFactura<10:
                num = "00"+str(numFactura)
            elif numFactura<100:
                num = "0"+str(numFactura)
            else:
                num = numFactura
            print("Ultima Factura Creada:")
            self.imprimirFactura(num)
        else:
            print("No creo ninguna Factura")
        print("Venta Total:",saldoDia)

# ==========================================================Clase Administracion====================================================
class Administracion(Usuario):
    def eliminarFactura(self):
        self.listaFacturas()
        print("Ingrese el codigo de la Factura a Eliminar")
        res = input("=> ")
        for factura in db:
            if factura == res:
                del db[factura]
                print(RED+"Factura Eliminada"+RESET)
                break

    def editarFactura(self):
        print("Que desea Realizar?")
        print(" 1: Agregar un producto")
        print(" 2: Modificar un producto")
        print(" 3: Eliminar un producto")
        res = input("=> ")
        if res == "1":
            self.agregarProducto()
        if res == "2":
            self.modificarProducto()
        if res == "3":
            self.eliminarProductos()

    def agregarProducto(self):
        encontrado = True
        self.listaFacturas()
        print("Ingrese el codigo de la Factura")
        res = input("=> ")
        for factura in db:
            if factura == res:
                self.imprimirFactura(res)
                print("Ingrese el codigo del producto a Agregar")
                res1 = input("=> ")
                for i in db[factura]:
                    if i == res1:
                        encontrado = False
                        break
                if encontrado:
                    descripcion = input("Descripcion del Producto: ")
                    while True:
                        precio = input("Costo de cada unidad: ")
                        precio = self.convertirNumero(precio)
                        if precio!="error":
                            break
                    while True:
                        unidades = input("Cantidad de unidades: ")
                        unidades = self.convertirNumero(unidades)
                        if unidades!="error":
                            break
                    while True:
                        iv = input("Iva del producto: ")
                        iv = self.convertirNumero(iv)
                        if iv!="error":
                            break
                    db[res][res1] = [descripcion,precio,unidades,iv]
                    print(RED+"Producto Agregado"+RESET)

    def modificarProducto(self):
        self.listaFacturas()
        print("Ingrese el codigo de la Factura")
        res = input("=> ")
        for factura in db:
            if factura == res:
                self.imprimirFactura(res)
                print("Ingrese el codigo a Modificar")
                res1 = input("=> ")
                for i in db[factura]:
                    if i == res1:
                        descripcion = input("Nueva Descripcion del Producto: ")
                        while True:
                            precio = input("Costo de cada unidad: ")
                            precio = self.convertirNumero(precio)
                            if precio!="error":
                                break
                        while True:
                            unidades = input("Cantidad de unidades: ")
                            unidades = self.convertirNumero(unidades)
                            if unidades!="error":
                                break
                        while True:
                            iv = input("Iva del producto: ")
                            iv = self.convertirNumero(iv)
                            if iv!="error":
                                break
                        db[res][res1] = [descripcion,precio,unidades,iv]
                        print(RED+"Producto Modificado"+RESET)

    def eliminarProductos(self):
        self.listaFacturas()
        print("Ingrese el codigo de la Factura")
        res = input("=> ")
        for factura in db:
            if factura == res:
                self.imprimirFactura(res)
                print("Ingrese el codigo a Eliminar")
                res1 = input("=> ")
                for i in db[factura]:
                    if i == res1:
                        print(db[res][res1])
                        del db[res][res1]
                        print(RED+"Producto Eliminado"+RESET)
                        break
