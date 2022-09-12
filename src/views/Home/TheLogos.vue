<template>
    <div class="flex-grow-1 d-flex flex-column po-logos">
        <div class="d-flex po-logos-container flex-wrap flex-grow-1 justify-center">
            <div
                :class="{ 'ml-custom-16': idx % 2 > 0, 'mt-custom-19':  idx > 1}"
                class="po-logos-item d-flex justify-center"
                v-for="(logo, idx) in logos"
                :key="idx"
            >
                <TheVideo :path="logo.path" />
            </div>
        </div>
    </div>
</template>

<script setup>

import TheVideo from './components/TheVideo.vue';

const logos = [
    {
        path: 'SIS.mp4',
    },
    {
        path: 'AMC.mp4',
    },
    {
        path: 'Tri_1.mp4',
    },
    {
        path: 'Tri_2.mp4',
    },
    {
        path: 'MEM.mp4',
    },
    {
        path: 'PizzaGhost1_2.mp4',
    },
    {
        path: 'Logos.mp4',
    },
    {
        path: 'REP.mp4',
    },
];
</script>

<style lang="scss" scoped>
@import '../../styles/functions.scss';
@import '../../styles/vars.scss';
.po {
    &-logos {
        padding-top: min(get-vw(100px), 100px);
        padding-bottom: min(get-vw(100px), 100px);
        background-color: var(--vt-c-black);
    }

    &-logos-container {

    }

    &-logos-item {
        width: min(get-vw(560px), 560px);
        height: min(get-vw(315px), 315px);
    }
}
</style>
