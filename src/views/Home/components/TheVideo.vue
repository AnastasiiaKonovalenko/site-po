<template>
    <video class="section-video" autoplay loop muted :src="videoSrc" />
</template>

<script>
export default {
    name: 'TheVideo',
    props: {
        path: {
            type: String,
            required: true,
        },
    },
    computed: {
        videoSrc() {
            return new URL(`../../../assets/${this.path}`, import.meta.url)
                .href;
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../../../styles/functions.scss';
@import '../../../styles/vars.scss';

.section-video {
    width: min(get-vw(560px), 560px);
    height: min(get-vw(315px), 315px);
}
</style>
