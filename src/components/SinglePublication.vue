<template>
  <div class="card">
      <h4>{{ publication.type }}</h4>
      <h3>{{ publication.title }}</h3>

      <p>
        <strong>Authors: </strong>
        <span 
          v-for="(author, index) in publication.authors"
          :key="author.id"
          class="author"
        >
          <Author 
            :author="author"
            :selected-author="selectedAuthor"
            @select-author="selectedAuthor = $event"
          />
          <span v-if="index !== totalAuthors - 1">
            {{ index === totalAuthors - 2 ? ' and ' : ',' }}
          </span>
        </span>
      </p>

      <p
        v-if="publication.editor"
        class="no-margin"
      >
        <b>Editor: </b>
        <Author 
          :author="publication.editor"
          :selected-author="selectedAuthor"
          @select-author="selectedAuthor = $event"
        />
      </p>

      <p
        v-if="publication.yourself"
        class="no-margin"
      >
        <b>Yourself: </b>
        <Author 
          :author="publication.yourself"
          :selected-author="selectedAuthor"
          @select-author="selectedAuthor = $event"
        />
      </p>

      <Affiliation
        v-if="publication.yourself"
        :affiliations="publication.yourself.affiliations"
      />

      <h5>{{ publication.journal }} | {{ publication.section }}</h5>
      
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Publication } from '@/interfaces/Publication'
import Author from '@/components/Author.vue'
import Affiliation from '@/components/Affiliation.vue'

const props = defineProps<{
  publication: Publication
}>()

const totalAuthors = computed(() => props.publication.authors ? props.publication.authors.length : 0)
const selectedAuthor = ref<null | number>(null)

</script>

<style lang="scss" scoped>
@import '@/scss/variables';
.card {
    background-color: $white;
    width: 100%;
    max-width: 65.9rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.4rem 3.2rem 3.2rem;
    gap: .8rem;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

    h3 {
        font-size: 2rem;
        line-height: 2.8rem;
        margin: 0
    }

    h4 {
        color: $grey;
        font-weight: 300;
        font-size: 1.5rem;
        line-height: 2.1rem;
        margin: 0;
    }

    h5 {
      margin: 0
    }
    
    .no-margin {
      margin: 0;
    }
}
.author {
  display: inline;
  font-weight: 300;
  padding: 0 .2rem;
  line-height: 2.2rem;
}
</style>