<template>

  <div id="app">
    <Navigation />
    <Banner />
    <br>
    <div class="container">
      <main>
        <!-- Servicios -->
        <div class="container subTitulo" id="services">
            <h3>Nuestros Servicios de Vuelos Orbitales</h3>
        </div>
        <Services />
        <br>
        <!-- Noticias -->
        <div class="container subTitulo" id="news">
            <h3>Últimas Noticias</h3>
        </div>
        <div id="apinoticias" class="apinoticias">
          <div class="container">
            <News />
          </div>
        </div>
      </main>
    </div>
    <!-- Parte de Equipos -->
    <br>
    <div class="container">
      <div class="container subTitulo" id="team">
        <h3>Nuestro Equipo</h3>
      </div>
    </div>
    <div class="container" id="containerEquipo">
        <Team />
    </div>
    <br>
    <Footer />
  </div>

</template>

<script>
/* Estaticos */
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Services from './components/Services';
import Footer from './components/Footer';
/* Dinamicos */
import News from './containers/News';
import Team from './containers/Team';

export default {
  name: 'App',
  components: {
    Navigation,
    Banner,
    Services,
    Footer,
    News,
    Team
  },
}

</script>
