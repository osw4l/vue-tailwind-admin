import { createRouter, createWebHashHistory } from 'vue-router'
import store from "../store";
import Home from '../views/home.vue'
import Login from "@/views/auth/login.vue";
import Register from "@/views/auth/register.vue";

const routes = [
  {
    path: '/404',
    name: 'PageNotFound',
    component: () => import('@/views/404.vue'),
  },
  {
    path: "/",
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { guest: true },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { guest: true },
  },
  {
    path: "/:catchAll(.*)",
    redirect: '/404',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    console.log(store.getters.isAuthenticated)
    if (store.getters.isAuthenticated) {
      next("/");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router
