<template>
    <div>
        <nav class="main-nav">
            <Menu 
            :items="menuItems" 
            />
        </nav>
    </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Menu from '@/components/Menu.vue'
import { MenuItem } from '@/interfaces/MenuItem'

const menuItems = ref<MenuItem[]>([])

onMounted(async () => {
    const response = await fetch('./src/assets/json/menu.json')
    menuItems.value = (await response.json()) as MenuItem[]
})
</script>