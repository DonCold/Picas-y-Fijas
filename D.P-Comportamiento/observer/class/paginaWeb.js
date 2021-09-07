export const Pagina = class {
    constructor(nombre) {
        this.nombre = nombre;
        this.subscriptores = [];
    }

    adjuntar = (observador) => {
        var elemento = this.subscriptores.indexOf(observador);
        if(elemento === -1) {
            this.subscriptores.push(observador);
        }
    }

    despegar = (observador) => {
        var elemento = this.subscriptores.indexOf(observador);

        if(elemento > -1) {
            this.subscriptores.splice(elemento, 1);
        } else {
            console.log(`${observador.nombre} no puede cancelar la suscripción porque aún no esta subscrito \n`);
        }
    }

    notificar = () => {
        this.subscriptores.map( (sub) => {
            sub.actualizar(this);
        })
        console.log('\n');
    }

    nuevoPost = (titulo) => {
        console.log(`> ${this.nombre} => Nuevo Post Subido: ${titulo}\n`);
        this.notificar();
    }
}
