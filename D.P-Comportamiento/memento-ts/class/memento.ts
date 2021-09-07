import { cuentaIn } from './cuenta.ts'

export interface recuerdoIn {
    obtenerEstado(): cuentaIn;
}

export const Recuerdo = class implements recuerdoIn {
    private estado: cuentaIn;

    constructor(cuenta: cuentaIn) {
        this.estado = cuenta;
    }

    obtenerEstado = () => {
        return this.estado;
    }
}
