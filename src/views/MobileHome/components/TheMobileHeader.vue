<template>
    <div class="po-mobile-header d-flex flex-column position-relative">
        <div
            :class="{
                'po-mobile-header-background': !isBackgroundHidden,
                'po-mobile-header-background-hidden': isBackgroundHidden,
            }"
            class="po-mobile-header-background"
        ></div>
        <div class="d-flex justify-space-between">
            <div class="img">
                <v-img
                    width="162"
                    class="grey lighten-2 mr-2"
                    content-class="flex-grow-1"
                    :src="imageSrc"
                    :aspect-ratio="0.8"
                >
                    <template v-slot:placeholder>
                        <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                        >
                            <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                            ></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
            </div>
            <div class="z-index-1">
                <div class="po-mobile-header-top-subtext align-self-end mt-12 mb-1">
                    UI/UX, Identity, Editorial, Graphic,
                </div>
                <h1 class="po-mobile-header-heading">
                    PRODUCT DESIGNER
                </h1>
            </div>
        </div>
        <div class="po-mobile-header-name mt-5 ml-13">OLHA Kharytonova</div>

        <div
            class="d-flex flex-grow-1 mt-13 align-self-end pr-6 pl-6 mb-10 justify-space-between align-end w-100"
        >
            <v-btn
                @click="toggleMobileMenu"
                icon elevation="0" class="bg-transparent">
                <VerticalDots v-if="!isMobileMenuVisible" class="z-index-1" />
                <CloseIcon v-else class="z-index-1" />
            </v-btn>
            <span class="po-mobile-header-bottom-subtext">
                based in Vilnius, Lithuania
            </span>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import VerticalDots from '../../components/icons/VerticalDots.vue';
import { useLayoutFlagsStore } from '../../../stores/layout-flags';
import CloseIcon from '../../components/icons/CloseIcon.vue';
const { toggleMobileMenu } = useLayoutFlagsStore();
import { storeToRefs } from 'pinia';
const { isMobileMenuVisible } = storeToRefs(
    useLayoutFlagsStore()
);
defineProps({
    isBackgroundHidden: Boolean,
});

const imageSrc = computed(() => {
    return new URL(`../../../assets/photo_mobile.jpg`, import.meta.url).href;
});
</script>

<style lang="scss" scoped>
.po-mobile-header {
    color: var(--vt-c-grey-1);
    font-family: 'RedHatDisplay-Light', serif;

    &-background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        background-color: var(--vt-c-black);
        transition: all 0.8s ease-out;

        &-hidden {
            height: 0;
            transition: all 0.8s ease-out;
        }
    }

    &-top-subtext {
        color: var(--vt-c-grey-1);
        font-size: 30px;
        width: 155px;
        line-height: 130%;
        z-index: 1;
    }

    &-avatar {
        margin-left: -30px;
        z-index: 1;
    }

    &-heading {
        font-family: 'RedHatDisplay-Bold', serif;
        color: var(--vt-c-grey-1);
        font-size: 35px;
        letter-spacing: 0.03em;
        line-height: 130%;
        z-index: 7;
    }

    &-name {
        font-size: 25px;
        width: 176px;
        line-height: 130%;
        z-index: 1;
    }

    &-bottom-subtext {
        font-size: 20px;
        line-height: 100.9%;
        max-width: 109px;
        z-index: 1;
    }
}

.z-index-1 {
    z-index: 1;
}

.img {
    margin-top: 215px;
}
</style>
