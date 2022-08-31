<template>
    <div class="position-relative" style="height: 1000px;">
        <div class="hide-line"></div>
        <Transition name="slide-fade">
            <h2 v-if="isHeaderOnPortfolioDownloaded" class="po-header-2">
                Welcome to my portfolio
            </h2>
        </Transition>
    </div>
</template>

<script setup>
import { useLayoutFlagsStore } from '../../../stores/layout-flags';
const { setIsHeaderOnPortfolioDownloaded } = useLayoutFlagsStore();
import { storeToRefs } from 'pinia';
const { isHeaderOnPortfolioDownloaded } = storeToRefs(useLayoutFlagsStore());

setTimeout(() => {
    setIsHeaderOnPortfolioDownloaded();
}, 1000);
</script>

<style lang="scss" scoped>
@import '../../../styles/_variables.scss';

.po {
    &-header-2 {
        font-family: 'Cinzel-Regular', serif;
        font-style: normal;
        font-size: 65px;
        color: var(--vt-c-grey-1);
        padding-bottom: 47px;
        background-color: white;
        z-index: 1;
        position: relative;
        right: 234px;
        white-space: nowrap;
    }
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(-284px);
    opacity: 0;
}

.hide-line {
    background-color: white;
    height: 145px;
    width: 10px;
    position: absolute;
    left: -3px;
}
</style>
