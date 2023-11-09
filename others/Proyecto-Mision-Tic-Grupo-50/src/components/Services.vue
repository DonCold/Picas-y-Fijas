<template>
    <div class="row">
        <div class="col servicio">
            <a target="_blank" href="https://www.spacex.com/" class="link">
                <img src="/images/spacexLogo.png" alt="Logo SpaceX" class="logo">
                <br>
                <p class="descripcionServicios">Es una empresa estadounidense de fabricación aeroespacial y de
                    servicios de transporte espacial con residencia en Hawthorne (California). Fue fundada en 2002
                    por Elon Musk con el objetivo de reducir los costes de viajar al espacio para facilitar la
                    colonización de Marte.</p>
            </a>
        </div>
        <div class="col servicio">
            <a target="_blank" href="https://www.virgingalactic.com/" class="link">
                <img src="/images/Virgin_Galactic_Logo.png" alt="Logo Virgin Galactic" class="logo">
                <br>
                <p class="descripcionServicios">Es una empresa dentro de Virgin Group de Sir Richard Branson que
                    planea proporcionar vuelos espaciales suborbitales tripulados, lanzamientos suborbitales para
                    misiones científicas y lanzamientos orbitales para satélites pequeños.</p>
            </a>
        </div>
        <div class="col servicio">
            <a target="_blank" href="https://www.blueorigin.com/" class="link">
                <img src="/images/favpng_logo-blue-origin-brand-industry-company.png" alt="Logo Blue Origin"
                    class="logo">
                <br>
                <p class="descripcionServicios">Es una empresa estadounidense de transporte aeroespacial fundada en
                    el año 2000 por Jeff Bezos. Entre sus objetivos se encuentran los vuelos sub orbitales y
                    orbitales, tanto para misiones oficiales de Estados Unidos, como para vuelos privados</p>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Services"
    }
</script>

<style scoped>

/* Parte Servicios */

.servicio {
    margin: 0 5px;
    padding: 2em;
    border-radius: 5%;
    border: 2px #212529 solid;
    /*border: 2px #eeeeee solid;*/
    text-align: center;
    background-color:#e0aaff;
    color: #240046;
    transition: 0.2s;
}

.col-4{
    width: 32.23%;
}

.servicio:hover{
    box-shadow: 3px 3px 3px 1px rgb(0, 0, 0, 0.2);
    transform: scale(1.05, 1.05);
}

.logo {
    width: 300px;
    height: 100px;
}

.link {
    text-decoration: none;
    color: #240046;
}

</style>
