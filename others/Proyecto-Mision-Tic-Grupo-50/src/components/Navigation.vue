<template>
    <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark justify-content-end">
        <div class="container-fluid">
            <!-- Columna del titulo -->
            <a class="navbar-brand titulo" href="# ">

                <i class="fas fa-rocket"></i>
                New Horizon
            </a>
            <!-- Boton para Pantallas mas pequeñas -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Botones de Navegacion -->
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav d-flex">
                    <li class="nav-item">
                        <a class="nav-link enlace" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link enlace" href="#services">Servicios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link enlace" href="#news">Noticias</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link enlace" href="#team">Equipo</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style scoped>

/* Parte Navegacion */

.navegacion {
    background-color: #FAEBD7;
}

.enlace {
    font-size: 20px;
    color: #222831;
    font-family: 'PT Sans', sans-serif;
}

.enlace:hover {
    color: rgb(140, 137, 137);
    font-family: 'PT Sans', sans-serif;
}

</style>
