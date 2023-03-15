<template>
    <div class="container">
      <LogoAnimation />
      <h2>Thank you for considering participating to this paper</h2>
        <SinglePublication 
            :publication="publication"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Publication } from '@/interfaces/Publication'
import PublicationsService from '@/services/publications/LocalRepository'
import SinglePublication from '../components/SinglePublication.vue'
import LogoAnimation from '../components/LogoAnimation.vue'

const idPublication = ref<string>('abcde1234')
const publication = ref<Publication>({})

onMounted(async () => {
     publication.value = await PublicationsService.get(idPublication.value)
})
</script>