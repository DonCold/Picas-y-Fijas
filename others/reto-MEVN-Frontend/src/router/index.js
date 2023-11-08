import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/usuarios",
    name: "Usuarios",
    component: () => import("../views/Usuarios.vue"),
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/categorias",
    name: "Categorias",
    component: () => import("../views/Categorias.vue"),
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/servicios",
    name: "Articulos",
    component: () => import("../views/Articulos.vue"),
    meta: {
      requireAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) =>{
  if(to.matched.some(destinoRequireAut => destinoRequireAut.meta.requireAuth)){
    if(localStorage.getItem("token")){
      next();
    } else {
      next({
        path: "/login"
      })
    }
  } else {
    next();
  }
});

export default router
