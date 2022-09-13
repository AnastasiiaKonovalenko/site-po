<template>
    <div
        :class="{ iii_logos: isLogos }"
        class="iii d-flex flex-grow-1 pt-custom-10"
    >
        <div
            :class="{
                'iii_logos-left': isLogos,
                'iii_left-hidden': !isAboutMeDownloaded,
            }"
            class="iii_left d-flex"
        >
            <TheMenuList :menu-items="menuItems" />
        </div>
        <div
            :class="{
                'iii_logos-right': isLogos,
                'iii_right-full': isFull,
            }"
            class="iii_right flex-grow-1 d-flex position-relative"
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
const { isAboutMeDownloaded } = storeToRefs(useLayoutFlagsStore());
import { useRoute } from 'vue-router';

const route = useRoute();
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

const isLogos = computed(() => {
    return (route.path === '/logos');
})

const isFull = computed(() => {
    return (
        route.path === '/pizza-ghost' ||
        route.path === '/cadabra' ||
        route.path === '/logos'
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
        width: min(get-vw(362px), 362px);
        min-width: min(get-vw(362px), 362px);
        padding-top: min(get-vw(85px), 85px);
        padding-right: min(get-vw(54px), 54px);
        margin-right: min(get-vw(42px), 42px);
        transition: all 0.4s ease-out;
        z-index: 5;

        &:after {
            content: '';
            position: absolute;
            width: 1px;
            left: 100%;
            top: min(get-vw(120px), 120px);
            bottom: 0;
            z-index: 10000;
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

    &_logos {
        margin-right: 0;
        &-left {
            &:after {
                display: none;
            }
        }
        &-right {
            padding-left: 0 !important;
            margin-right: 0 !important;
            padding-bottom: 0;
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
