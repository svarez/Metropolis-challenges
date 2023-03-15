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
import { useRoute } from "vue-router";
import MainMenu from '@/assets/json/main-menu.json'

const menuItems = ref<MenuItem[]>([])
const route =useRoute()

onMounted(async () => {
    menuItems.value = MainMenu as MenuItem[]
})
</script>