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

                <Transition name="slide-fade">
                    <TheContactsMenu
                        class="ml-4"
                        v-if="
                            isContactsVisible &&
                            isMobileMenuVisible &&
                            idx === menuItems.length - 1
                        "
                    />
                </Transition>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import TheContactsMenu from './TheContactsMenu.vue';
import { storeToRefs } from 'pinia';
import { useLayoutFlagsStore } from '../../../stores/layout-flags';
const { isMobileMenuVisible } = storeToRefs(useLayoutFlagsStore());
const isContactsVisible = ref(false);
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
const cvLink = computed(
    () => new URL(`../../../assets/cv/CV_OK.pdf`, import.meta.url).href
);
const goToPage = (id) => {
    if (id !== 'cv') {
        id === 'contacts'
            ? (isContactsVisible.value = !isContactsVisible.value)
            : document
                  .getElementById(id)
                  .scrollIntoView({ behavior: 'smooth' });
    }
};

watch(isMobileMenuVisible, (newValue) => {
    if (!newValue) {
        isContactsVisible.value = false;
    }
});
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

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>
