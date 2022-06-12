const Ui = require("./ui");
const Github = require("./github");
const { client_id, client_secret } = require("./config.json");

const github = new Github(client_id, client_secret);
const ui = new Ui();

const userForm = document.getElementById("userForm");

userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = document.getElementById("textForm").value;
    if(user!=""){
        github.obtenerUsuario(user)
            .then(data => {

                if(data.datosUsuario.message === "Not Found") {
                    ui.mostrarMensaje("El Usuario No Existe", "alert alert-danger col-12 mt-2");
                }else{
                    ui.mostrarPerfil(data.datosUsuario);
                    ui.mostrarRepositorios(data.datosRepositorios);
                    document.getElementById("textForm").value = "";
                }
            })
    }
})