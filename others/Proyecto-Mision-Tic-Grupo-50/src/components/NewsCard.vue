<template>
  <div class="col-md-6 card noticia">
    <a target="_blank" :href="url" class="textoNoticia">
      <div class="row g-0">

        <div class="col-lg-4 d-flex justify-content-center align-items-lg-center">
          <img :src="img" alt="Hola Mundo">
        </div>

        <div class="col-lg-8 textoNoticia">
          <div class="card-body">
            <small class="card-text sitioNoticia">{{ siteweb }}</small>
            <h5 class="card-title">{{ title }}</h5>

            <span class="badge bg-info text-dark">{{ tag }}</span>

            <p class="card-text"><small class="text-muted">Publicado el {{ publico }}</small></p>
          </div>
        </div>

      </div>
    </a>
  </div>
</template>

<script>

export default {
  name: 'Noticia',
  props: ["img", "url", "title", "publico", "siteweb", "tag"],
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* Parte Noticia */


.noticia {
    padding: 1em;
    border-radius: 3%;
    border: 5px #212529 solid;
    background-color: #0e3f77;
    color:#2f3030;
    transition: 0.2;
}

.noticia:hover {
    box-shadow: 1px 1px 1px 1px rgb(0, 0, 0, 0.2);
    transform: scale(0.95, 0.95);
}

.noticia img {
    border-radius: 5%;
    width: 100%;
    height: 90%;
}

.textoNoticia {
    text-decoration: none;
    color:#b3c0c0;
    margin: auto;
}

.sitioNoticia {
    font-size: 30px;
    font-family: 'Open Sans Condensed', sans-serif;
    color: #b9c1c9;
}

</style>
