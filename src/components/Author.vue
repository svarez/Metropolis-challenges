<template>
    <div
        class="position-relative"
    >
        <span 
            class="name"
            @click="openModal"
        >
            {{ author.fullName }}
        </span><sup>{{ totalAffiliations }}</sup>
        <div
            v-if="showModal"
            class="box"
        >
            <h3>{{ author.fullName }}</h3>
            <img 
                v-if="!showInitials" 
                class="profile-img" 
                :src="author.pictureUrl" 
                @error="showInitials = true" 
            />
            <div
                v-if="showInitials" 
                class="initials"
            >
                {{ initialsOfFullname }}
            </div>
            <p class="role">{{ author.role }}</p>
            <p class="counts">
                <span><b>{{ author.publications.toLocaleString('us-US') }}</b> Publictions</span> 
                <span><b>{{ author.views.toLocaleString('us-US') }}</b> Views</span> 
                <span><b>{{ author.followers.toLocaleString('us-US') }}</b> Followers</span>
            </p>
            <p class="view-profile">
                <a :href="author.profileUrl" target="_blank" >
                    <img src="@/assets/images/view-profile.svg" /> View profile
                </a>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Author } from '@/interfaces/Author'
const emit = defineEmits(['select-author'])

const props = defineProps<{
  author: Author,
  selectedAuthor: null | number
}>()

const totalAffiliations = computed(() => props.author.affiliations.length || 0)
const initialsOfFullname = computed(() => getInitials(props.author.fullName))
const showModal = ref<boolean>(false)
const showInitials = ref<boolean>(false)

watch(() => props.selectedAuthor, () => { 
    if (props.selectedAuthor !== props.author.id) {
        showModal.value = false
    }
})

const openModal = () => {
    showModal.value = !showModal.value
    const selectAuthor = showModal.value ? props.author.id : null
    emit('select-author', selectAuthor)
}

const getInitials = (fullName: String) => {
    const names = fullName.split(' ')
    const firstInitial = names[0].charAt(0)
    const lastInitial = names[names.length - 1].charAt(0)
    return `${firstInitial}${lastInitial}`
}


</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.name {
    text-decoration: underline;
    cursor: pointer;
}
.position-relative {
    display: inline;
    @media screen and (min-width: 30em) {
        position: relative;
    }
}
.box {
    background-color: $white;
    max-width: 65.9rem;
    width: max-content;
    padding: 1.6rem;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);   
    position: fixed;
    z-index: 1;

    @media screen and (max-width: 30em) {
        left: 50%;
        transform: translate(-50%);
    }

    .profile-img {
        position: absolute;
        right: 1.6rem;
        top: 1.6rem;
        width: auto;
        height: auto;
        max-width: 5.6rem;
        max-height: 5.6rem;
        border-radius: 100%;
    }

    .initials {
        position: absolute;
        right: 1.6rem;
        top: 1.6rem;
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 100%;
        border: 0.1rem solid rgb(0, 132, 173);
        background-color: rgba(0, 132, 173, 0.2);
        text-align: center;
        line-height: 5.6rem;
        font-weight: 500;
        font-size: 1.8rem;
        color: $blue
    }

    .role {
        font-size: 1.3rem;
    }

    .counts {
        font-size: 1.3rem;
        padding-right: 5rem;

        span {
            margin-right: 1rem;

            b {
                color: $blue;
                font-weight: bold;
            }
        }
    }
    .view-profile {
        text-align: right;

        a {
            text-transform: uppercase;
            text-decoration: none;
            color: $blue;
            font-weight: 400;
            font-size: 1.1rem;
            line-height: 1.7rem;
            
            img {
                vertical-align: middle;
            }
        }
    }
}

</style>
