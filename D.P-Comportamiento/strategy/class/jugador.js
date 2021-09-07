export const Jugador = class {
    constructor(nombre) {
        this.nombre = nombre;
        this.arma = null;
    }

    seleccionarArma = (Arma) => {
        this.arma = Arma;
    }

    atacar = () => {
        if(this.arma===null) return console.log(`${this.nombre} no ha Seleccionado un Arma.\n`);
        this.arma.usar(this);
    }
}
