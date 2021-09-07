import { Recuerdo, recuerdoIn } from './memento.ts';
import { cuentaIn } from './cuenta.ts';

export const EstadoActual = class {
    public estado!: cuentaIn;

    constructor() {
        this.estado === null;
    }

    asignar = (cuenta: cuentaIn) => {
        this.estado = cuenta;
    }

    verEstado = () => {
        return this.estado;
    }

    guardar = () => {
        return new Recuerdo(this.estado);
    }

    restaurar = (recuerdo: recuerdoIn) => {
        if( recuerdo ) {
            this.estado = recuerdo.obtenerEstado();
        } else {
            console.log(`Historial No Encontrado.`);
        }
    }
}
