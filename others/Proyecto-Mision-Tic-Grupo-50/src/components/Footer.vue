<template>
    <div class="container footer">
        <div class="row">
            <div class="col-10 text-center" id="footerTelefonos">
                <div class="companero">
                    <p class="nombreTel">Luis F. Osorio</p>
                    <p class="telefono"><i class="fa fa-phone"></i> 3017207442</p>
                </div>
                <div class="companero">
                    <p class="nombreTel">Sergio A. Meléndez</p>
                    <p class="telefono"><i class="fa fa-phone"></i> 3176595430</p>
                </div>
                <div class="companero">
                    <p class="nombreTel">Daniel D. Mejia</p>
                    <p class="telefono"><i class="fa fa-phone"></i> 3208857033</p>
                </div>
                <div class="companero">
                    <p class="nombreTel">Andrea K.Calderon</p>
                    <p class="telefono"><i class="fa fa-phone"></i> 3173773469</p>
                </div>
                <div class="companero">
                    <p class="nombreTel">Jeisson Botache </p>
                    <p class="telefono"><i class="fa fa-phone"></i> 3114802018</p>
                </div>
            </div>
            <!-- Enlaces de Interes -->
            <div class="col-2">
                <div class="d-flex flex-row-reverse footerEnlaces">
                    <a target="_blank" href="https://github.com/DonCold/Proyecto-Mision-Tic-Grupo-50">
                        <i class="fab fa-github footerEnlaces"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

/* Parte Footer */

.footer {
    background: linear-gradient(-180deg, #1282DB, #011625);
    border-radius: 15% 15% 0px 0px;
    color: #fcfcfc;
}

.footerEnlaces {
    padding: 10%;
    padding-right: 50%;
    font-size: 50px;
    color:#fcfcfc;
    text-decoration: none;
    align-self: center;
}

#footerTelefonos{
    display: flex;
    flex-wrap: wrap;
    padding: 2em;
    justify-content: space-around;
    align-self: center;
    font-family: 'Open Sans', sans-serif;
    font-size: small;
}

.nombreTel{
    font-family: 'Open Sans', sans-serif;
    font-size: large;
    font-style: italic;
}

</style>
