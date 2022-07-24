class Ui {
    constructor() {
        this.profile = document.getElementById("profile");
        this.repositorio = document.getElementById("repositorio");
        this.general = document.getElementById("General");
    }

    mostrarMensaje(mensage, clasecss) {
        this.limpiarMensaje();
        const div = document.createElement("div");
        const strong = document.createElement("strong");

        strong.appendChild(document.createTextNode(mensage));
        div.className = clasecss;
        div.appendChild(strong);

        const contenedor = document.querySelector(".row");
        const antesde = document.querySelector("#profile");
        contenedor.insertBefore(div, antesde);
    }

    limpiarMensaje() {
        const alerta = document.querySelector(".alert");
        if(alerta){
            alerta.remove();
        }
    }

    mostrarPerfil(user) {
        this.limpiarMensaje();

        if(!user.location){
            user.location = "No Ingresado";
        }
        if(!user.name){
            user.name = "No Ingresado";
        }
        if(!user.twitter_username){
            user.twitter_username = "No Ingresado";
        }

        let fecha = new Date(Date.parse(user.created_at));
        let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        let mes = parseInt(fecha.getMonth());
        let mess = meses[mes];
        user.created_at = `${fecha.getDate()} de ${mess} del ${fecha.getFullYear()}`;

        this.profile.innerHTML = `
            <div class="card mt-2 animate__animated animate__bounceInLeft">
                <img src="${user.avatar_url}" class="card-img-top" />
                <div class="card-body text-center">
                    <a class="btn btn-default" target="_blank" href="${user.html_url}"><i class="fas fa-caret-right"></i> <strong>${user.name} / </strong>${user.login}</a>
                    <br>
                    <span class="badge badge-success">Seguidores: ${user.followers}</span>
                    <span class="badge badge-primary">Siguiendo: ${user.following}</span>
                    <br>
                    <span class="badge badge-info"><i class="fab fa-twitter"></i> ${user.twitter_username}</span>
                    <span class="badge badge-danger"><i class="fas fa-map-marker-alt"></i> ${user.location}</span>
                </div>
            </div>
            <div class="col-12 alert alert-info text-center animate__animated animate__bounceInLeft">
                <strong>Repositorios: </strong>
                <span class="badge badge-info">${user.public_repos}</span>
            </div>
        `;
        this.mostrarGeneral(user);
    }

    mostrarGeneral(user) {
        console.log(user);
        if(!user.company){
            user.company = "No Registra Compañia";
        }

        if(user.type){
            if(user.type == "User"){
                user.type = "Usuario";
            }
            if(user.type == "Organization"){
                user.type = "Organización";
                user.company = "Es Una Organización :)";
            }
        }

        if(!user.blog){
            user.blog = "No Tiene Blog";
        }
        if(!user.bio){
            user.bio = "No Anexa Biografia";
        }

        this.general.innerHTML = `
            <div class="card mt-2 animate__animated animate__bounceInRight">
                <div class="card-body">
                    <div class="bg-black-50 text-dark p-2 rounded">
                        <h1 style="font-size: 180%; font-family: 'Oswald', sans-serif;" class="text-center"><strong>${user.type}</strong></h1>
                    </div>
                    <div class="bg-warning text-dark p-2 rounded">
                        <strong>Compañia:</strong> ${user.company}
                    </div>
                    <div class="bg-info text-light p-2 rounded">
                        <strong>Blog:</strong> ${user.blog}
                    </div>
                    <hr>
                    <div> <strong>Biografia:</strong> <br> ${user.bio} </div>
                    <br>
                    <div class="bg-dark text-white-50 text-center p-2 rounded">
                        Miembro Desde el ${user.created_at}
                    </div>
                </div>
            </div>
        `;
    }

    mostrarRepositorios(repositorios) {
        console.log(repositorios);
        let template = "";

        repositorios.forEach(repo => {
            if(!repo.language){
                repo.language = "No Encotrado";
            }
            template += `
                <div class="card card-body mb-2 animate__animated animate__bounceInRight">
                    <div class="row">
                        <div class="col-md-6">
                            <i class="fas fa-caret-right"></i>
                            <a href="${repo.html_url}" target="_blank"><strong>${repo.name}</strong></a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">
                                ${repo.language}
                            </span>
                            <span class="badge badge-success">
                                Forks: ${repo.forks_count}
                            </span>
                            <span class="badge badge-warning">
                                <i class="fas fa-star"></i> ${repo.stargazers_count}
                            </span>
                        </div>
                    </div>
                </div>
            `;
        });

        this.repositorio.innerHTML = template;
    }
}

module.exports = Ui;