<template>
    <div
        :class="{ visible: isMobileMenuVisible, hidden: !isMobileMenuVisible }"
        class="d-flex flex-column ml-10"
    >
        <ul class="po-list position-relative">
            <li
                v-for="(item, idx) in menuItems"
                :key="idx"
                class="po-list-item d-flex align-center"
            >
                <a
                    class="h-100 z-index-1 d-flex align-center"
                    v-if="item.id === 'cv'"
                    :href="cvLink"
                    target="_blank"
                >
                    {{ item.title }}
                </a>

                <span
                    class="h-100 d-flex align-center"
                    v-else
                    @click="goToPage(item.id)"
                >
                    {{ item.title }}
                </span>
                <TheContactsMenu
                    class="ml-4"
                    v-if="
                        isContactsVisible &&
                        isMobileMenuVisible &&
                        idx === menuItems.length - 1
                    "
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

const isContactsVisible  = ref(false)
const menuItems = [
    {
        title: 'About me',
        id: 'about-me',
    },

    {
        title: 'Pizza Ghost',
        id: 'pizza-ghost',
    },
    {
        title: 'Cadabra',
        id: 'cadabra',
    },
    {
        title: 'Other',
        id: 'logos',
    },
    {
        title: 'Download CV',
        id: 'cv',
    },
    {
        title: 'Contacts',
        id: 'contacts',
    },
];
const cvLink = computed(() => {
    return new URL(`../../../assets/cv/CV_OK.pdf`, import.meta.url).href;
});

const goToPage = (id) => {
    if (id === 'cv') {
        return;
    } else if (id === 'contacts') {
        isContactsVisible.value = !isContactsVisible.value;
    } else {
        const el = document.getElementById(id);
        el.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<style lang="scss" scoped>
.po {
    &-list {
        overflow: hidden;
        color: var(--vt-c-grey-1);
        padding: 12px 0 0 0;
        margin: 8px 0 0 0;
        height: max-content;
        z-index: 3;
        transition: all 0.8s ease;
        &-item {
            height: 60px;
            cursor: pointer;
            padding: 4px 0 4px 0;
        }
    }
}

.visible {
    max-height: 500px;
    transition: all 0.8s ease-out;
}

.hidden {
    max-height: 0;
    overflow: hidden;
    transition: all 0.8s ease-out;
}

a {
    color: var(--vt-c-grey-1);
    text-decoration: none;
    font-style: unset;
}

.z-index-1 {
    z-index: 1;
}
</style>
