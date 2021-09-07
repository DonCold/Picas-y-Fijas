abstract class Cliente {
    public nombre: string;
    public apellido: string;

    constructor( nombre: string, apellido: string ) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    verInformación() {
        console.log( `Nombre: ${this.nombre}\tapellido: ${this.apellido}\n` );
    }

    abstract pagar():void;
}

class ClientePremium extends Cliente {
    pagar() {
        console.log(`${this.nombre} Al ser Premium Recibe descuento por el producto.\n`);
    }
}

class ClienteHabitual extends Cliente {
    pagar() {
        console.log(`${this.nombre} Paga el Producto Normalmente\n`);
    }
}

const cliente1 = new ClienteHabitual('Juanito', 'Perez');
const cliente2 = new ClientePremium('Pepito', 'Perez');

cliente1.verInformación();
cliente2.verInformación();

cliente1.pagar();
cliente2.pagar();
