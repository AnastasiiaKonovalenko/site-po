<template>
    <div class="flex-grow-1 d-flex flex-column overflow-x-hidden">
        <div
            class="d-flex flex-grow-1 justify-center align-center"
            style="min-height: 100vh"
            v-if="isLoading"
        >
            <TheLoader />
        </div>
        <div v-else class="position-relative flex-grow-1 d-flex flex-column">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import TheLoader from './TheLoader.vue';
export default {
    name: 'TheLayout',
    props: {
        isLoading: {
            type: Boolean,
            default: false,
        },
    },
    components: { TheLoader },
};
</script>

<style scoped></style>
