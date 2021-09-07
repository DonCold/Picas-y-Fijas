export const Cuenta = class {
    constructor(id, nombre, saldo, fecha) {
        this.id = id;
        this.nombre = nombre;
        this.saldo = saldo;
        this.fecha = fecha;
    }

    verInformacion = () => {
        console.log(`Fecha de Consignacion: ${this.fecha}` );
        console.log(`Id: ${this.id} Nombre: ${this.nombre} Saldo: ${this.saldo}\n`);
    }

    configurarNombre = (nombre) => {
        this.nombre = nombre;
    }

    nuevoSaldo = (saldo) => {
        this.saldo = saldo;
    }
}
