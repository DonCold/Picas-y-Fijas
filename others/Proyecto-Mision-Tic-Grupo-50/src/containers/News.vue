<template>
  <div class="row">
    <Noticia v-for="noticia in noticias"
          :img = "noticia.img"
          :key = "noticia.id"
          :url = "noticia.url"
          :title = "noticia.title"
          :publico = "noticia.public"
          :siteweb = "noticia.siteweb"
          :tag = "noticia.tag"
      />
  </div>
</template>

<script>

import Noticia from '../components/NewsCard';

export default {
  name: 'News',
  components: {
    Noticia
  },
  data() {
    return {
      noticias: [],
      API: "https://spaceflightnewsapi.net/api/v1/articles",
      cantidadNoticias: 4,
    }
  },
  methods: {
    pintarDatos(info){
        if(this.cantidadNoticias===""){
            this.cantidadNoticias = info.length;
        }
        for(let i=0; i<this.cantidadNoticias;i++){
          if(info[i].published_date){
            var fecha = new Date(info[i].published_date);
            var fechaFormat = fecha.getDate() + "/"+ (parseInt(fecha.getMonth()) + 1) + "/" + fecha.getFullYear();
          } else {
            fechaFormat = "00/00/0000";
          }

          try {
              var tag = info[i].tags[0];
              tag = tag.charAt(0).toUpperCase() + tag.slice(1);
          } catch {
              tag = "Not specified";
          }

          if(info[i].featured_image){
            var img = info[i].featured_image;
          } else {
            img = "/images/notfound.jpg";
          }
          if(info[i].title){
            var title = info[i].title;
          } else {
            title = "Title Not Included";
          }
          if(info[i]._id){
            var id = info[i]._id;
          } else {
            id = Math.random() * 1000
          }
          if(info[i].news_site_long){
            var site = info[i].news_site_long;
          } else {
            site = "Not Included";
          }
          if(info[i].url) {
            var url = info[i].url;
          } else {
            url = "https://es.wikipedia.org/wiki/HTTP_404";
          }

          this.noticias.push({
              img: img,
              id : id,
              url: url,
              title: title,
              public: fechaFormat,
              siteweb: site,
              tag: tag,
          });
        }
    },

    async buscarDatosAPI(){
        const res = await fetch(this.API);
        const data = await res.json();

        this.pintarDatos(data.docs);
    }

  },

  created() {
    this.buscarDatosAPI();
  }

}

</script>
