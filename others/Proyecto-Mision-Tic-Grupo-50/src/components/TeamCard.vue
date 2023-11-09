<template>
  <div class="col text-center equipo">
      <br>
      <a target="_blank"  :href="member.dom">
          <img :src="member.image" :alt="member.codigo" class="foto">
      </a>
      <br>
      <h5 class="nombre" >{{ member.nombre }}</h5>
      <p class="rol">{{ member.rol }}</p>
      <p>{{ member.descripcion }} <span class="hidden">{{ member.codigo }}</span></p>
  </div>
</template>

<script>

export default {
  name: 'TeamCard',
  props: ["member"],
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Parte Equipo */

.equipo {
    border-radius: 5%;
    border: 2px #212529 solid;
    background-color: #3c096c;
    color: #45a29e;
}

.foto {
    border-radius: 150%;
    width: 200px;
    height: 200px;
    transition: 0.2;
}

.foto:hover{
    box-shadow: 1px 1px 1px 1px rgb(0, 0, 0, 0.2);
    transform: scale(1.03, 1.03);
}

.nombre {
    font-family: 'Langar', cursive;
}

.rol {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #66fcf1;
}

.hidden {
    display: none;
}

</style>
