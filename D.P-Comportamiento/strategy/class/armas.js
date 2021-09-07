const Arma = class {
    constructor(damage) {
        this.damage = damage
    }
    nombrar = () => {
        console.log(`El Enemigo recibe ${this.damage} de daño. \n`);
    }
    usar = () => {}
}

export const Espada = class extends Arma {
    usar = (jugador) => {
        console.log(`${jugador.nombre} Ataca con Espada.`);
        this.nombrar();
    }
}

export const Pistola = class extends Arma {
    usar = (jugador) => {
        console.log(`${jugador.nombre} Ataca con Pistola.`);
        this.nombrar();
    }
}

export const Cuchillo = class extends Arma {
    usar = (jugador) => {
        console.log(`${jugador.nombre} Ataca con Cuchillo.`);
        this.nombrar();
    }
}
