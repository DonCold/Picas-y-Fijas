
<template>
  <v-app id="inspire">

    <!-- Esta es la Barra del Titulo  -->
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>SISA</v-toolbar-title>
    </v-app-bar>

    <!-- Barra de Navegacion -->

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-card
        class="mx-auto"
        width="300"
      >
        <v-list>

          <v-list-item to="/" class="link">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>

          <v-list-group
            :value="true"
            prepend-icon="mdi-microsoft-xbox-controller-menu"
          >
            <template v-slot:activator>
              <v-list-item-title>Menu</v-list-item-title>
            </template>
            <v-list-group
              :value="true"
              no-action
              sub-group
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Secciónes</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item
                v-for="([title, icon, ruta], i) in servicios"
                :key="i"
                :to="ruta"
                class="link"
                link
              >
                <v-list-item-title v-text="title"></v-list-item-title>
                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
            <v-list-group
              no-action
              sub-group
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Administración</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item
                v-for="([title, icon, ruta], i) in administracion"
                :key="i"
                :to="ruta"
                class="link"
                link
              >
                <v-list-item-title v-text="title"></v-list-item-title>
                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
          </v-list-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: null,
    servicios: [
      ['Servicios', 'mdi-store', "servicios"],
      ['Categorias', 'mdi-order-bool-ascending-variant', "categorias"],
    ],
    administracion: [
      ['Ingresar', 'mdi-account-outline', "login"],
      ['Usuarios', 'mdi-account-multiple-outline', "usuarios"],
    ],
  }),
};
</script>

<style scoped>

.link {
  text-decoration: none;
}

</style>
