import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import ExerciseOne from '@/pages/ExerciseOne.vue'
import ExerciseTwo from '@/pages/ExerciseTwo.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/exercise-one', component: ExerciseOne },
    { path: '/exercise-two', component: ExerciseTwo }
  ]
})

export default router