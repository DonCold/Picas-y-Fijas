module.exports = {
    title: "Pagina de Prueba",
    description: "Probando Una Nueva Herramienta",
    themeConfig: {
        logo: "/assets/img/logo.png",
        nav: [
            {text: "Home", link: "/"},
            {text: "Pagina 1", link: "/pagina/"},
            {text: "Github", link: "https://github.com/LuisFOsG"},
        ],
        sidebar: {
            "/pagina/": obtenerSideBar(),
        },
    },
};

function obtenerSideBar() {
    return [
        {
            "title": "Titulo xD",
            "collapsable": false,
            children: [
                "SubPagina",
                "nuevasub"
            ]
        },
    ];
}
