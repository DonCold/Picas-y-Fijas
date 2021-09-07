import { Recuerdo } from './memento.js';

export const EstadoActual = class {
    constructor() {
        this.estado === null;
    }

    asignar = (cuenta) => {
        this.estado = cuenta;
    }

    verEstado = () => {
        return this.estado;
    }

    guardar = () => {
        return new Recuerdo(this.estado);
    }

    restaurar = (recuerdo) => {
        if( recuerdo ) {
            this.estado = recuerdo.obtenerEstado();
        } else {
            console.log(`Historial No Encontrado.`);
        }
    }
}
