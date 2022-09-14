<template>
    <v-img
        class="grey lighten-2"
        content-class="img flex-grow-1"
        :src="imageSrc(props.src)"
        :aspect-ratio="props.aspectRatio"
        contain
    >
        <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                ></v-progress-circular>
            </v-row>
        </template>
    </v-img>
</template>

<script setup>
const props = defineProps({
    src: String,
    aspectRatio: Number,
});

const imageSrc = (path) => {
    return new URL(`../../../assets/${path}`, import.meta.url).href;
};
</script>

<style lang="scss" scoped>
.img {
    width: 100%;
    height: fit-content;
}
</style>
