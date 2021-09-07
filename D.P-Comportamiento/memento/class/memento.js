export const Recuerdo = class {
    constructor(cuenta) {
        this.estado = cuenta;
    }

    obtenerEstado = () => {
        return this.estado;
    }
}
