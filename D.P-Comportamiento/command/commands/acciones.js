export const Productos = class {
    constructor(cliente) {
        this.cliente = cliente;
    }

    ejecutar = () => {
        this.cliente.verProductosComprados();
    }
}

export const Comprar = class {
    constructor(cliente, producto, monto) {
        this.cliente = cliente;
        this.monto = monto;
        this.producto = producto;
    }

    ejecutar = () => {
        this.cliente.comprar( this.producto, this.monto );
    }
};

export const Devolucion = class {
    constructor(cliente, producto, monto) {
        this.cliente = cliente;
        this.monto = monto;
        this.producto = producto;
    }

    ejecutar = () => {
        this.cliente.devolver( this.producto, this.monto );
    }
};
