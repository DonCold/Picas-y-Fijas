class ClientePremium1 {
    private nombre: string;
    private apellido: string;

    constructor( nombre: string, apellido: string ) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    verInformación() {
        console.log( `Nombre: ${this.nombre} \tapellido: ${this.apellido}\n` );
    }

    pagar() {
        console.log(`${this.nombre} Al ser Premium Recibe descuento por el producto.\n`);
    }
}

class ClienteHabitual1 {
    private nombre: string;
    private apellido: string;

    constructor( nombre: string, apellido: string ) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    verInformación() {
        console.log( `Nombre: ${this.nombre}\tapellido: ${this.apellido}\n` );
    }

    pagar() {
        console.log(`${this.nombre} Paga el Producto Normalmente\n`);
    }
}

const cliente3 = new ClienteHabitual1('Juanito', 'Perez');
const cliente4 = new ClientePremium1('Pepito', 'Perez');

cliente3.verInformación();
cliente4.verInformación();

cliente3.pagar();
cliente4.pagar();
