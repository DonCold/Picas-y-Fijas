<template>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/images/banner1.jpg" class="d-block w-100" alt="Banner 1">
            <div class="carousel-caption d-none d-md-block">
              <p>“A veces creo que hay vida en otros planetas, y a veces creo que no. En cualquiera de los dos casos la conclusión es asombrosa.”</p>
              <h5>CARL SAGAN</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/images/banner2.jpg" class="d-block w-100" alt="Banner 2">
            <div class="carousel-caption d-none d-md-block">
              <p>“A veces pienso que la prueba más fehaciente de que existe vida inteligente en el universo es que nadie ha intentado contactar con nosotros.”</p>
              <h5>BILL WATTERSON</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/images/banner3.jpg" class="d-block w-100" alt="Banner 3">
            <div class="carousel-caption d-none d-md-block">
              <p>“La ley no ha sido establecida por el ingenio de los hombres, ni por el mandamiento de los pueblos, sino que es algo eterno que rige el Universo con la sabiduría del imperar y del prohibir.”</p>
              <h5>CICERON</h5>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Banner"
    }
</script>


<style scoped>

/* Parte Banner */

.banner {
    background-color: #ffffff;
}

.w-100 {
    height: 760px;
}

.carousel-item p{
    margin-bottom: 3rem;
    color: #f72585;
    font-family: 'Russo One', sans-serif;
    font-size: 2.5rem;
    line-height: 3rem;
    text-shadow: 2px 2px 4px black;
}

.carousel-item h5{
    font-family: 'Russo One', sans-serif;
    font-size: 1.5rem;
    line-height: 3rem;
    text-shadow: 2px 2px 4px black;
}

/* ajustes de @Media */

@media (min-width: 320px) and (max-width: 767px) {
    .w-100 {
        height: 300px;
    }
 }

 @media (min-width: 768px) and (max-width: 1023px) {
    .w-100 {
        height: 500px;
    }
    .carousel-item p{
        color: #f72585;
        font-family: 'Russo One', sans-serif;
        font-size: 2rem;
        text-shadow: 2px 2px 4px black;
    }

    .carousel-item h5{
        font-family: 'Russo One', sans-serif;
        font-size: 1.3rem;
        text-shadow: 2px 2px 4px black;
    }
}

</style>
