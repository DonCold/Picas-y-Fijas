export const Invoker = class {
    constructor() {
        this.listaOperaciones = [];
    }

    recibirOperacion = (comando) => {
        this.listaOperaciones.push(comando);
    }

    realizarOperaciones = () => {
        this.listaOperaciones.map((comando) => {
            comando.ejecutar();
        })
        this.listaOperaciones = [];
    }
};
