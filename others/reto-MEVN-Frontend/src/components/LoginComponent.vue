<template>
  <div class="container d-flex justify-content-center align-items-center mt-8">
    <div class="card col-md-6 text-center">
      <div class="card-header">
        <i class="fas fa-user icono"></i> <span class="texto"> Log in</span>
      </div>
      <div class="card-body">
        <v-form v-model="valid">
          <v-container>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Contraseña"
              type="password"
              required
            ></v-text-field>
          </v-container>

          <button class="btn btn-primary" v-on:click.prevent="iniciarSesion" >Ingresar</button>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
  import Swal from 'sweetalert2'
  import axios from 'axios';

  export default {
      name: "LoginComponet",
      data: () => ({
        valid: false,
        email: '',
        password: '',
        emailRules: [
          v => !!v || 'Por favor ingrese un E-mail',
          v => /.+@.+/.test(v) || 'E-mail Invalido.',
        ],
        passwordRules: [
          v => !!v || 'Por favor ingrese su Contraseña',
        ],
      }),
      methods: {
        async iniciarSesion() {
          try {
            let login = {
              "email": this.email,
              "password": this.password
            }
            axios.post("http://localhost:3000/api/usuario/login", login)
              .then((res) =>{
                let token = res.data.tokenReturn;
                if(token){
                  localStorage.setItem("token", token);
                  localStorage.setItem("user", JSON.stringify(res.data.user));

                  console.log(token);
                  this.email = "";
                  this.password = "";
                  Swal.fire({
                    title: 'Bienvenido',
                    text: "Logueado Correctamente",
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  });
                }
              })
              .catch((e) =>{
                Swal.fire({
                  title: 'No encontrado',
                  text: "Usuario No Encontrado",
                  icon: 'error',
                  confirmButtonText: 'Ok'
                });
              })
          } catch(e) {
            Swal.fire({
              title: 'Error',
              text: "A Ocurrido un Error",
              icon: 'error',
              confirmButtonText: 'Ok'
            });
          }
        },
      }
  }
</script>

<style  scoped>
.btn-primary {
  color: white;
}

.card-header {
  background: #0F2027;
  background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);
  background: linear-gradient(to right, #2C5364, #203A43, #0F2027);
  color: white;
  font-size: 25px;
  font-family: 'Anton', sans-serif;
}

.icono {
  font-size: 50px;
}

.texto {
  font-size: 25px;
  padding: 15px;
}
</style>
