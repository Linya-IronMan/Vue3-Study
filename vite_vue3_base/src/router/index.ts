import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import("../components/HelloWorld.vue"),
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})