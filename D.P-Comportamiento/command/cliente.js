export const Cliente = class {
    constructor(id, nombre, dinero) {
        this.id = id;
        this.nombre = nombre;
        this.dinero = dinero;
        this.productos = [];
    };

    dineroTotal = () => {
        console.log(`Dinero Restante: ${this.dinero} \n`);
    }

    verProductosComprados = () => {
        console.log(`Productos comprados por ${this.nombre}:`);
        this.productos.map( (producto, indice) => {
            console.log(`${indice+1}: ${producto}`);
        });
        console.log(`\n`);
    }

    comprar = (producto, monto) => {
        if((this.dinero - monto) < 0) {
            console.log(`${this.nombre} no tiene suficiente Dinero Para comprar Este producto.`);
            this.dineroTotal();
            return;
        }

        this.dinero -= monto;
        this.productos.push(producto);
        console.log(`El Cliente ${this.nombre} compro ${producto}.`);
        this.dineroTotal();
    }

    devolver = (producto, monto) => {
        if(!this.productos.includes(producto)) {
            return console.log( `Producto No encontrado, No se puede realizar la devolucion del Cliente ${this.nombre}\n` );
        }

        this.dinero += monto;

        var elemento = this.productos.indexOf(producto);
        this.productos.splice(elemento, 1);
        console.log(`Se Hizo la devolucion del Usuario ${this.nombre} por el producto: ${producto}.`);
        this.dineroTotal();
    }
};
