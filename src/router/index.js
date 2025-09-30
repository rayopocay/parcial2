import { createRouter, createWebHashHistory } from 'vue-router'
import FormularioView from '../views/FormularioView.vue'  

const routes = [
  {
    path: '/',
    name: 'home',
    component: FormularioView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
