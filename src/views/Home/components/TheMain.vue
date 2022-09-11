<template>
    <div class="iii d-flex flex-grow-1 pt-custom-10">
        <div
            :class="{ 'iii_left-hidden': !isAboutMeDownloaded }"
            class="iii_left d-flex"
        >
            <TheMenuList :menu-items="menuItems" />
        </div>
        <div
            :class="{ 'iii_right-full': isFull }"
            class="iii_right d-flex position-relative"
        >
            <router-view />
        </div>
    </div>
</template>

<script setup>
import TheMenuList from './TheMenuList.vue';
import { computed } from 'vue';
import { useLayoutFlagsStore } from '../../../stores/layout-flags';
import { storeToRefs } from 'pinia';
const { isAboutMeDownloaded } = storeToRefs(
    useLayoutFlagsStore()
);

const menuItems = [
    {
        title: 'About me',
        path: '/',
    },
    {
        title: 'Download CV',
        path: '/cv',
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
        title: 'Contacts',
        path: '/contacts',
    },
];

const isFull = computed(() => {
    return (
        this?.$route.path === '/pizza-ghost' ||
        this?.$route.path === '/cadabra' ||
        this?.$route.path === '/logos'
    );
});
</script>

<style lang="scss" scoped>
@import '../../../styles/functions.scss';
@import '../../../styles/vars.scss';

.iii {
    margin-right: min(get-vw(284px), 284px);
    align-items: stretch;
    border-right: 1px solid transparent;
    transition: all 0.4s ease-out;

    &_left {
        position: relative;
        width: min(get-vw(350px), 350px);
        min-width: min(get-vw(350px), 350px);
        padding-top: min(get-vw(85px), 85px);
        padding-right: min(get-vw(54px), 54px);
        margin-right: min(get-vw(54px), 54px);
        transition: all 0.4s ease-out;

        &:after {
            content: '';
            position: absolute;
            width: 1px;
            left: 100%;
            top: min(get-vw(120px), 120px);
            bottom: 0;
            background-color: var(--vt-c-grey-1);
            transition: all 0.8s ease-out;
        }

        &-hidden {
            transform: translateY(100%);
            transition: all 0.8s ease-out;
        }
    }

    &_right {
        padding-bottom: min(get-vw(104px), 104px);
        box-sizing: border-box;
        margin-right: min(get-vw(452px), 452px);
        padding-left: min(get-vw(43px), 43px);

        &-full {
            margin-right: min(get-vw(304px), 304px);
        }
    }
}

.po {
    &-menu-marker {
        top: min(get-vw(250px), 250px);
        left: min(get-vw(-5px), -5px);
        height: min(get-vw(9px), 9px);
        width: min(get-vw(9px), 9px);
        border-radius: 50%;
        background-color: var(--vt-c-grey-1);
    }
}
</style>
