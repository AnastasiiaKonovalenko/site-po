<template>
    <div class="po-project d-flex">
        <div class="po-project-info d-flex flex-column justify-center align-center">
            <div class="po-project-header mb-8">{{ header }}</div>
            <div class="po-project-text">{{ text }}</div>
        </div>
        <img class="po-project-img" :src="imageSrc" :alt="imgSrc" />
    </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
    imgSrc: String,
    header: String,
    text: String,
});
const imageSrc = computed(() => {
    return new URL(`../../../assets/${props.imgSrc}`, import.meta.url).href;
});
</script>

<style lang="scss" scoped>
.po-project {
    &-info {
        margin-left: 44px;
        margin-right: 24px;
    }

    &-header {
        font-family: RedHatDisplay-Regular, serif;
        font-size: 30px;
        line-height: 100.17%;
        color: var(--vt-c-grey-1);
    }

    &-text {
        font-family: RedHatDisplay-Regular, serif;
        font-size: 18px;
        line-height: 100.17%;
        color: var(--vt-c-grey-1);
    }

    &-img {
        height: 300px;
        width: 183px;
        min-width: 183px;
        object-fit: cover;
        object-position: left bottom;
    }
}
</style>
