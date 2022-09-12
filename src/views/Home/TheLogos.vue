<template>
    <div class="flex-grow-1 d-flex flex-column po-logos">
        <div
            class="d-flex po-logos-container flex-wrap flex-grow-1 justify-center"
        >
            <div
                :class="{
                    'ml-custom-16': idx % 2 > 0,
                    'mt-custom-19': idx > 1,
                }"
                class="po-logos-item d-flex justify-center"
                v-for="(logoItems, idx) in logos"
                :key="idx"
            >
                <TheVideo
                    :index="idx + 1"
                    :folder="logoItems.folder"
                    :photosCount="logoItems.photos"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import TheVideo from './components/TheVideo.vue';

const logos = [
    {
        folder: 'sis',
        photos: 4,
    },
    {
        folder: 'amc',
        photos: 6,
    },
    {
        folder: 'tri_1',
        photos: 8,
    },
    {
        folder: 'tri_2',
        photos: 4,
    },
    {
        folder: 'mem',
        photos: 5,
    },
    {
        folder: 'pizza',
        photos: 5,
    },
    {
        folder: 'logos',
        photos: 8,
    },
    {
        folder: 'rep',
        photos: 9,
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
