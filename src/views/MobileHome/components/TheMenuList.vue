<template>
    <div class="d-flex flex-column ml-10">
        <ul class="po-list position-relative">
            <li
                v-for="(item, idx) in menuItems"
                :key="idx"
                class="po-list-item d-flex align-center"
                @click="goToPage(item.path)"
            >
                <a v-if="item.path === '/cv'" :href="cvLink" target="_blank">
                    {{ item.title }}
                </a>

                <span v-else> {{ item.title }} </span>
                <TheContactsMenu
                    class="ml-4"
                    v-if="isContactsVisible && idx === menuItems.length - 1"
                />
            </li>
        </ul>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import TheContactsMenu from './TheContactsMenu.vue';

defineProps({
    isMobileMenuVisible: Boolean,
});
const menuItems = [
    {
        title: 'About me',
        path: '/',
    },

    {
        title: 'Pizza Ghost',
        path: '/pizza-ghost',
    },
    {
        title: 'Cadabra',
        path: '/cadabra',
    },
    {
        title: 'Other',
        path: '/logos',
    },
    {
        title: 'Download CV',
        path: '/cv',
    },
    {
        title: 'Contacts',
        path: '/contacts',
    },
];
const cvLink = computed(() => {
    return new URL(`../../../assets/cv/CV_OK.pdf`, import.meta.url).href;
});

let isContactsVisible = ref(false);

const goToPage = (path) => {
    if (path === '/cv') {
        return;
    } else if (path === '/contacts') {
        isContactsVisible.value = !isContactsVisible.value;
    } else {
        // this.$route.path !== path ? router.push(`${path}`) : true;
    }
};
</script>

<style lang="scss" scoped>
.po {
    &-list {
        color: var(--vt-c-grey-1);
        padding: 12px 0 12px 0;
        margin: 8px 0 8px 0;
        height: max-content;
        z-index: 3;
        &-item {
            height: 60px;
            cursor: pointer;
            padding: 4px 0 4px 0;
        }
    }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateY(100px);
}

a {
    text-decoration: none;
    font-style: unset;
}
</style>
