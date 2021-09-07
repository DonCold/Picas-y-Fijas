export const Cliente = class {
    constructor(nombre) {
        this.nombre = nombre;
    }

    actualizar = (pagina) => {
        console.log(`Hola ${this.nombre} la Pagina '${pagina.nombre}' A subido un Nuevo Post!!.`);
    }
}
