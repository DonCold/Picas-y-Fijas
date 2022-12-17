class Github {

    constructor(clientId, clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        /* Configuracion de los Repositorios */
        this.cantidadRepositorios = "";
        this.ordenarPor = "created: asc";
    }

    async obtenerUsuario(user) {
        const usuarioObtenido = await fetch(`http://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const repositoriosObtenidos = await fetch(`http://api.github.com/users/${user}/repos?client_id=${this.clientId}&client_secret=${this.clientSecret}&per_page=${this.cantidadRepositorios}&sort=${this.ordenarPor}`);

        const datosUsuario = await usuarioObtenido.json();
        const datosRepositorios = await repositoriosObtenidos.json();


        return {
            datosUsuario,
            datosRepositorios
        };
    }
}

module.exports = Github;