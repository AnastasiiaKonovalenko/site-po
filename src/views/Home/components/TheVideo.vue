<template>
    <div class="po-carousel position-relative" data-ride="carousel">
        <img
            v-for="(item, idx) in photosCount"
            :key="item"
            :class="{ 'section-video-active': idx === currentSlide }"
            class="section-video position-absolute"
            :src="linkBuilder(folder, idx)"
            alt="logo"
        />
    </div>
</template>

<script>
export default {
    name: 'TheVideo',
    props: {
        index: {
            type: Number,
            required: true,
        },
        folder: {
            type: String,
            required: true,
        },
        photosCount: {
            type: Number,
            required: true,
        },
    },

    data() {
        return {
            currentSlide: 0,
        };
    },

    mounted() {
        const timeout = this.index * 1000;
        setTimeout(() => {
            return this.currentSlide === this.photosCount - 1
                ? (this.currentSlide = 0)
                : this.currentSlide++;
        }, timeout)

        setTimeout(() => {
            setInterval(() => {
                return this.currentSlide === this.photosCount - 1
                    ? (this.currentSlide = 0)
                    : this.currentSlide++;
            }, 6000);
        }, timeout);
    },

    methods: {
        linkBuilder(folder, path) {
            return new URL(
                `../../../assets/${folder}/${path}.jpg`,
                import.meta.url
            ).href;
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../../../styles/functions.scss';
@import '../../../styles/vars.scss';

.carousel-fade {
    .carousel-inner {
        .item {
            transition-property: opacity;
        }

        .item,
        .active.left,
        .active.right {
            opacity: 0;
        }

        .active,
        .next.left,
        .prev.right {
            opacity: 1;
        }

        .next,
        .prev,
        .active.left,
        .active.right {
            left: 0;
            transform: translate3d(0, 0, 0);
        }
    }

    .carousel-control {
        z-index: 2;
    }
}

html,
body,
.carousel,
.carousel-inner,
.carousel-inner .item {
    height: 100%;
}

.item:nth-child(1) {
    background: #74c390;
}

.item:nth-child(2) {
    background: #51bce8;
}

.item:nth-child(3) {
    background: #e46653;
}

.section-video {
    width: 100%;
    height: fit-content;
}

.po-carousel {
    width: min(get-vw(560px), 560px);
    height: min(get-vw(315px), 315px);
}

.section-video {
    opacity: 0;
    transition: all 3s ease-out;

    &-active {
        opacity: 1;
        transition: all 3s ease-out;
    }
}
</style>
