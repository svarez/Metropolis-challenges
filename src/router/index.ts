import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import ExerciseOne from '@/pages/ExerciseOne.vue'
import ExerciseTwo from '@/pages/ExerciseTwo.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/Metropolis-challenges/', component: Home },
    { path: '/Metropolis-challenges/exercise-one', component: ExerciseOne },
    { path: '/Metropolis-challenges/exercise-two', component: ExerciseTwo }
  ]
})

export default router