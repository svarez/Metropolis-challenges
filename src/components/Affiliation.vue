<template>
    <p
        class="title"
        @click="toggleAffiliationsList"
    >
        Affiliations
        <img 
            class="arrow"
            :class="{ 'arrow-up' : showAffiliationsList }" :src="arrowImage" 
        />
    </p>
    <transition name="fade">
        <div v-if="showAffiliationsList">
            <ul 
                class="affiliations-list"
            >
                <li
                    v-for="(affil, index) in affiliations"
                    :key="affil.id"
                >
                    <sup>{{ index + 1 }}</sup> {{ affil.name }}, {{ affil.city }}, {{ affil.country }}
                </li>
            </ul>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Affiliation } from '@/interfaces/Affiliation'
import arrowImage from '@/assets/images/arrow.svg'

const props = defineProps<{
    affiliations: Affiliation[]
}>()

const showAffiliationsList = ref<boolean>(false)

const toggleAffiliationsList = () => {
    showAffiliationsList.value = !showAffiliationsList.value
}

</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.title {
    color: $blue;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 2.2rem;
    cursor: pointer;
}

.affiliations-list {
    list-style: none;
    margin: 0 0 2rem;
    padding-left: 0;
    opacity: 1;
    transition: opacity 0.5s;

    li {
        font-style: normal;
        font-weight: 300;
        font-size: 1.5rem;
        line-height: 2rem;
        color: $grey;
        margin-bottom: .4rem;

        sup {
            font-weight: bold;
        }
    }
}
.arrow {
    transition: transform .2s;
    
    &.arrow-up {
        transform: rotate(-180deg);
    }
}
.fade-enter-active .affiliations-list,
.fade-leave-active .affiliations-list {
    opacity: 0;
}
</style>