import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ELR from '@/views/ELR.vue'
import NotFound from '@/views/NotFound.vue'
import GrampsView from '@/views/GrampsView.vue'
import ShiftAideView from '@/views/ShiftAideView.vue'


const router = createRouter({
  scrollBehavior() {
      return {top: 0}
  },
  history: createWebHistory(),
  routes: [
    {path: '/', component: HomeView},
    { path: '/elr', name: 'elr', component: ELR },
    {path: '/gramps', name: 'gramps', component: GrampsView},
    {path: '/shift-aide', name: 'shift-aide', component: ShiftAideView},
    { path: '/yum', name: 'yum', component: AboutView },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ]
})

export default router
