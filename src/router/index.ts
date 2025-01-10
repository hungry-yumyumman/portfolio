import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ELR from '@/views/ELR.vue'
import NotFound from '@/views/NotFound.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: HomeView},
    { path: '/yum', name: 'yum', component: AboutView },
    { path: '/elr', name: 'elr', component: ELR },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ]
})

export default router
