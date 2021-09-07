import { recuerdoIn } from './memento.ts';

interface historialIn {
    agregar(recuerdo: recuerdoIn): void,
}

export const Historial = class implements historialIn {
    private listaHistorial: recuerdoIn[];

    constructor() {
        this.listaHistorial = [];
    }

    agregar = (recuerdo: recuerdoIn) => {
        this.listaHistorial.push(recuerdo);
    }

    obtenerHistorial = (index: number) => {
        return this.listaHistorial[index];
    }
}
