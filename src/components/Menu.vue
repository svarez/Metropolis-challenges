<template>
  <div 
    class="menu"
  >
    <ul>
      <li 
        v-for="item in items" 
        :key="item.id"
      >
        <div 
          class="menu-item" 
          @click="item.isExpanded = !item.isExpanded"
        >
          <span class="menu-item-label">
            {{ item.label }}
          </span>
          <img 
            v-if="item.children" 
            class="item-icon arrow"
            :class="{ 'arrow-up' : item.isExpanded }" src="@/assets/images/arrow.svg" 
          />
        </div>
        <Menu 
          v-if="item.children" 
          :items="item.children" 
          :class="`level-${item.level}`"
          v-show="item.isExpanded" 
        />
      </li>
    </ul>
  </div>
</template>
  
<script setup lang="ts">
import { MenuItem } from '@/interfaces/MenuItem'
import('@/scss/menu.scss')

const props = defineProps<{
    items: MenuItem[]
}>()

</script>
