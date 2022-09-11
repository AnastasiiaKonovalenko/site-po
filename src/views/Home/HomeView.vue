<script setup>
import { computed, onMounted } from 'vue';
import { useLayoutFlagsStore } from '../../stores/layout-flags';
import TheMenu from './components/TheMenu.vue';
import MenuImgItem from './components/MenuImgItem.vue';
import TheFooter from './components/TheFooter.vue';
import TheMain from './components/TheMain.vue';
const {
    setIsHeaderOnPortfolioDownloaded,
    setIsAboutMeDownloaded,
    setIsBackgroundHidden,
    setIsProjectsMenuHidden,
} = useLayoutFlagsStore();
import { storeToRefs } from 'pinia';
const { isBackgroundHidden, isProjectsMenuHidden } = storeToRefs(
    useLayoutFlagsStore()
);

import { useRoute } from 'vue-router';

const route = useRoute();

const projects = computed(() => [
    {
        path: 'pizza-ghost',
        isVisible: route.path === '/' || route.path === '/pizza-ghost',
        isActive: route.path === '/pizza-ghost',
        imgSrc: 'pizza_broshur.jpg',
        header: 'See Pizza Ghost project',
        subheader:
            'booklet and application concept for ordering a customized pizza',
    },
    {
        path: 'cadabra',
        isVisible: route.path === '/' || route.path === '/cadabra',
        isActive: route.path === '/cadabra',
        imgSrc: 'kadabra_broshur_22.jpg',
        header: 'Kadabra project',
        subheader:
            'Marketing Agency Website Concept + Brand Identity & Logo Book',
    },
    {
        path: 'logos',
        isVisible: route.path === '/' || route.path === '/logos',
        isActive: route.path === '/logos',
        imgSrc: 'jaro_2.png',
        header: 'Logos, Identity, mltipage layout samples',
        subheader: '',
    },
]);

onMounted(() => {
    const setIsAboutMeDownloadedTime = route.path === '/' ? 3400 : 2600;

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
});
</script>

<template>
    <div class="po-main">
        <div class="po-head d-flex w-100 overflow-hidden">
            <TheMenu />

            <div class="po-2 d-flex flex-grow-1 position-relative">
                <div
                    :class="{
                        'po-2-background': !isBackgroundHidden,
                        'po-2-background-hidden': isBackgroundHidden,
                    }"
                    class="position-absolute"
                />

                <div class="po-header flex-grow-1 d-flex flex-column">
                    <div class="po-header-subtext ml-custom-10 mt-custom-13">
                        UI/UX, Identity, Editorial, Graphic,
                    </div>
                    <h1 class="po-header-text ml-custom-10">
                        PRODUCT DESIGNER
                    </h1>
                    <div
                        class="po-header-subtext po-header-subtext-small ml-custom-10 mt-custom-23"
                    >
                        based in Vilnius, Lithuania
                    </div>
                </div>

                <div
                    :class="{
                        'wrap-hidden':
                            isProjectsMenuHidden || $route.path !== '/',
                    }"
                    class="d-flex flex-column wrap"
                >
                    <MenuImgItem
                        v-for="(project, idx) in projects"
                        :path="project.path"
                        :v-if="project.isVisible"
                        :is-active="project.isActive"
                        :key="idx"
                        :img-src="project.imgSrc"
                    >
                        <div class="po-menu-img-wrap-header">
                            {{ project.header }}
                        </div>
                        <div class="po-menu-img-wrap-p">
                            {{ project.subheader }}
                        </div>
                    </MenuImgItem>
                </div>
            </div>
        </div>

        <TheMain />

        <TheFooter />
    </div>
</template>

<style lang="scss" scoped>
@import '@/styles/vars.scss';
@import '@/styles/functions.scss';
.po {
    &-2 {
        border-left: 1px solid var(--vt-c-grey-1);
        &-background {
            top: 0;
            bottom: 0;
            width: 100%;
            background-color: var(--vt-c-black);
            transition: all 0.8s ease-out;

            &-hidden {
                width: 0;
                transition: all 0.8s ease-out;
            }
        }
    }
    &-main {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow-x: hidden;
    }

    &-head {
        height: 50vh;
        max-height: min(get-vw(800px), 800px);
        min-height: min(get-vw(615px), 615px);
    }

    &-header {
        overflow-y: hidden;
        z-index: 1;

        &-text {
            font-family: RedHatDisplay-Light, serif;
            max-width: min(get-vw(600px), 600px);
            font-size: min(get-vw($head-h1-font-size), $head-h1-font-size);
            color: var(--vt-c-grey-1);
        }

        &-subtext {
            font-family: RedHatDisplay-Light, serif;
            font-size: min(get-vw(45px), 45px);
            color: var(--vt-c-grey-1);
            width: min(get-vw(110px), 110px);
            line-height: 100.9%;

            &-small {
                font-size: min(
                    get-vw($secondary-h2-font-size),
                    $secondary-h2-font-size
                );
            }
        }
    }

    &-menu-img-wrap {
        font-family: RedHatDisplay-Regular, serif;
        &-header {
            font-size: min(
                get-vw($third-party-text-font-size),
                $third-party-text-font-size
            );
            line-height: 100.17%;
            margin-bottom: min(get-vw(15px), 15px);
        }

        &-p {
            font-size: min(
                get-vw($fifth-party-text-font-size),
                $fifth-party-text-font-size
            );
            text-transform: none;
        }
    }
}

.wrap {
    right: 0;
    transition: all 0.8s ease-out;
    z-index: 1000;
    position: fixed;

    &-hidden {
        transform: translateX(200px);
        transition: all 0.8s ease-out;
    }
}
</style>
