<template>
    <TheLayout :is-loading="isCriticalCssLoading">
        <TheMobileHeader :isBackgroundHidden="isBackgroundHidden" />
        <TheMenuList :toggleMobileMenu="toggleMobileMenu" />
        <AboutMe />
        <PizzaGhost />
    </TheLayout>
</template>

<script setup>
import TheLayout from '../components/TheLayout.vue';
import TheMobileHeader from './components/TheMobileHeader.vue';
import TheMenuList from './components/TheMenuList.vue';
import AboutMe from './AboutMe.vue';
import PizzaGhost from './components/PizzaGhost.vue';
import { ref } from 'vue';
const {
    setIsHeaderOnPortfolioDownloaded,
    setIsAboutMeDownloaded,
    setIsBackgroundHidden,
    setIsProjectsMenuHidden,
} = useLayoutFlagsStore();
import { storeToRefs } from 'pinia';
const { isBackgroundHidden, toggleMobileMenu, isProjectsMenuHidden } =
    storeToRefs(useLayoutFlagsStore());
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { useLayoutFlagsStore } from '../../stores/layout-flags';

const route = useRoute();

let isCriticalCssLoading = ref(true);

onMounted(() => {
    const setIsAboutMeDownloadedTime = route.path === '/' ? 3400 : 2600;

    setTimeout(() => {
        isCriticalCssLoading.value = false;

        setTimeout(() => {
            setIsHeaderOnPortfolioDownloaded();
        }, 1000);
        setTimeout(() => {
            setIsBackgroundHidden();
        }, 1800);

        setTimeout(() => {
            setIsProjectsMenuHidden();
        }, 2600);

        setTimeout(() => {
            setIsAboutMeDownloaded();
        }, setIsAboutMeDownloadedTime);
    }, 2500);
});
</script>

<style scoped></style>
