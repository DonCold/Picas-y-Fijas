<template>
  <div class="row d-flex justify-content-center">
    <TeamCard v-for="miembro in miembros"
      :key = "miembro.codigo"
      :member = "miembro"
    />
  </div>
</template>

<script>
import TeamCard from '../components/TeamCard';
import data from '../assets/equipo';

export default {
  name: 'Team',
  components: {
    TeamCard
  },
  data() {
    return {
      miembros: []
    }
  },
  methods: {
    separarMiembros(){
      for(let i=0;i<data.length;i++){
        this.miembros.push({
          codigo: data[i].id,
          nombre: data[i].nombre,
          rol: data[i].rol,
          descripcion: data[i].descrip,
          dom: data[i].dom,
          image: data[i].foto
        });
      }
    }
  },
  created() {
    this.separarMiembros();
  }
}

</script>
