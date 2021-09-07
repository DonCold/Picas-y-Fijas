export interface cuentaIn {
    nombre: string,
    id: number,
    saldo: number,
    verInformacion(): void,
    configurarNombre(nombre: string): void,
    nuevoSaldo(saldo: number): void
}

export const Cuenta = class implements cuentaIn {
    public nombre: string;
    public id: number;
    public saldo: number;

    constructor(id: number, nombre: string, saldo: number) {
        this.id = id;
        this.nombre = nombre;
        this.saldo = saldo;
    }

    verInformacion = () => {
        console.log(`Id: ${this.id}\tNombre: ${this.nombre}\tSaldo: ${this.saldo}\n`);
    }

    configurarNombre = (nombre: string) => {
        this.nombre = nombre;
    }

    nuevoSaldo = (saldo: number) => {
        this.saldo = saldo;
    }
}
