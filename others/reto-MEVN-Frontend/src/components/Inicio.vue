<template>
  <v-container>

    <!-- Cerrar Sesion -->
    <div class="text-right" v-if="user.nombre">
      <span class="badge bg-secondary">{{ user.nombre }}</span>
      <button type="button" class="btn btn-success" v-on:click="cerrarSesion">Cerrar Sesión</button>
    </div>

    <v-layout wrap>
      <v-flex  xs12>
        <br>
          <div class="alert alert-primary" role="alert">
          INICIO
          </div>
        <v-carousel cycle>
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition" transition="fade-transition">

          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout  mt-10 justify-center >
      <v-flex xs9 >
        <h1 class="display-1 text-md-center">
          Quienes somos
        </h1>
        <p class="text-md-center">
          Soluciones integrales de software y administración (SISA) es una empresa dedicada al mantenimiento preventivo y correctivo de software, el cual busca dar soporte a todo el ciclo de vida, y así reducir las perdidas por fallas en dichos sistemas.
        </p>
      </v-flex>
    </v-layout>
    <v-layout mt-10 align-center justify-space-around row fill-height>
      <v-flex xs3>
          <v-card class="mx-auto" max-width="344">
            <v-img src="/images/Servicios1.jpg" height="200px"> </v-img>

            <v-card-title>
              TEST Comportamiento
            </v-card-title>

            <v-card-subtitle>
              Monitoreo 
            </v-card-subtitle>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                Servicio de testeo en su software publico, para persibir comportamientos no deseados en el sistema.
              </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>

      </v-flex>
      <v-flex xs3>
          <v-card class="mx-auto" max-width="344">
            <v-img src="/images/Servicio2.png" height="200px"> </v-img>

            <v-card-title>
              Análisis
            </v-card-title>

            <v-card-subtitle>
              Valoración
            </v-card-subtitle>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                Servicio en el cual se ofrece un análisis general del sistema, buscando anomalias o fallas y realizando su correción.
              </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
      </v-flex>
      <v-flex xs3>
          <v-card class="mx-auto" max-width="344">
            <v-img src="/images/Servicio3.jpg" height="200px"> </v-img>

            <v-card-title>
              Prevensión
            </v-card-title>

            <v-card-subtitle>
              Monitoreo
            </v-card-subtitle>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                Se realiza un monitoreo general y correción de las novedades presentadas en el sistema buscando dar solución a posibles fallas en el sistema
              </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>

import Swal from 'sweetalert2';

  export default {
      name: "Inicio",
      methods: {
        cerrarSesion(){
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          this.user = [];
          Swal.fire({
            title: 'Sesion Cerrada',
            text: "Vuelva Pronto",
            icon: 'success',
            confirmButtonText: 'Ok'
          });
        },
        imprimirNombre(){
          let user = localStorage.getItem("user");
          if(user){
            user = JSON.parse(user)
            this.user = user;
            console.log(this.user);
          }
        }
      },
   data () {
     return {
       show: false,
       user: [],
        items: [
          {
            src: '/images/Banner1.png',
          },
          {
            src: '/images/Banner2.jpg',
          },
          {
            src: '/images/Banner3.png',
          },
          {
            src: '/images/Banner4.jpg',
          },
        ],
      }
    },
    created() {
      this.imprimirNombre();
    }
  }
</script>


<style>
.v-card {
transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
opacity: 0.6;
 }

.show-btns {
color: rgba(255, 255, 255, 1) !important;
}
</style>
