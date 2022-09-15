<template>
    <TheLayout :is-loading="isCriticalCssLoading">
        <TheMobileHeader :isBackgroundHidden="isBackgroundHidden" />
        <TheMenuList
            :isMobileMenuVisible="isMobileMenuVisible"
            :toggleMobileMenu="toggleMobileMenu"
        />
        <AboutMe />
        <PizzaGhost class="mt-11" />
        <v-divider class="my-16 mx-6"></v-divider>
        <TheCadabra />
        <v-divider class="my-16 mx-6"></v-divider>
        <TheLogos />
        <TheFooter />
        <v-btn
            @click="scrollToTop"
            v-if="isFabVisible"
            class="fab-btn position-fixed"
            color="#858585"
        >
            <v-icon color="white"> mdi-arrow-up </v-icon>
        </v-btn>
    </TheLayout>
</template>

<script setup>
import TheLayout from '../components/TheLayout.vue';
import TheMobileHeader from './components/TheMobileHeader.vue';
import TheMenuList from './components/TheMenuList.vue';
import AboutMe from './AboutMe.vue';
import PizzaGhost from './components/PizzaGhost.vue';
import TheFooter from './components/TheFooter.vue';
import TheCadabra from './components/TheCadabra.vue';
import TheLogos from './components/TheLogos.vue';

import { ref } from 'vue';
const {
    setIsHeaderOnPortfolioDownloaded,
    setIsAboutMeDownloaded,
    setIsBackgroundHidden,
    setIsProjectsMenuHidden,
    toggleMobileMenu,
} = useLayoutFlagsStore();
import { storeToRefs } from 'pinia';
const { isBackgroundHidden, isMobileMenuVisible } = storeToRefs(
    useLayoutFlagsStore()
);
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { useLayoutFlagsStore } from '../../stores/layout-flags';

const route = useRoute();

let isCriticalCssLoading = ref(true);

let isFabVisible = ref(false);

window.onscroll = function () {
    isFabVisible.value = window.scrollY > window.screen.height;
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
}

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

<style scoped>
.fab-btn {
    padding: 0 !important;
    right: 0;
    bottom: 0;
    margin: 0 20px 20px 0;
    height: 40px !important;
    width: 40px !important;
    min-height: 40px !important;
    min-width: 40px !important;
    border-radius: 50%;
}
</style>
