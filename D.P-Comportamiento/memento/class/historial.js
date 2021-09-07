export const Historial = class {
    constructor() {
        this.listaHistorial = [];
    }

    agregar = (recuerdo) => {
        this.listaHistorial.push(recuerdo);
    }

    obtenerHistorial = (index) => {
        return this.listaHistorial[index];
    }
}
