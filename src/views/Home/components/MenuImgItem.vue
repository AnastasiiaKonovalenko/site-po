<template>
    <router-link :to="`/${path}`">
        <div
            class="po-menu-img-wrap position-relative"
            @mouseenter="isHover = true"
            @mouseleave="isHover = false"
        >
            <Transition name="po-img-wrap-text">
                <div
                    v-if="isHover && !isActive"
                    class="po-menu-img-wrap-text position-absolute"
                >
                    <slot></slot>
                </div>
            </Transition>

            <img
                class="po-menu-img"
                :class="{
                    'po-menu-img-hover': isHover,
                }"
                @click="isBig = true"
                :src="imageSrc"
                :alt="imgSrc"
            />
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'MenuImgItem',
    props: {
        path: {
            type: String,
            required: true,
        },
        imgSrc: {
            type: String,
            required: true,
        },
        isActive: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            isBig: false,
            isHover: false,
        };
    },
    computed: {
        imageSrc() {
            return new URL(`../../../assets/${this.imgSrc}`, import.meta.url)
                .href;
        },
    },
    watch: {
        '$route.path': {
            deep: true,
            handler(path) {
                path !== '/' ? (this.isHover = false) : true;
            },
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../../../styles/functions.scss';
@import '../../../styles/vars.scss';

.po {
    &-menu-img-wrap {
        cursor: default;
        display: flex;
        transition: 0.3s;

        &-active {
            box-sizing: border-box;
            overflow-x: hidden;
            padding-left: min(get-vw(100px), 100px);
        }

        &-text {
            font-style: normal;
            font-family: RedHatDisplay-Regular, sans-serif;
            color: var(--vt-c-grey-1);
            width: min(get-vw(187px), 187px);
            margin-right: min(get-vw(20px), 20px);
            margin-top: min(get-vw(12px), 12px);
            padding-right: min(get-vw(20px), 20px);
            transition: all 0.6ms;
            z-index: 1;
            left: -45%;
        }
    }

    &-menu-img {
        position: relative;
        right: -46%;
        height: 16.45vh;
        max-height: min(get-vw(264px), 264px);
        min-height: min(get-vw(202px), 202px);
        object-fit: contain;
        transition: all 0.3s ease-out;

        &-hover {
            right: -16%;
        }

        &-active {
            opacity: 1;
            right: 0;
            object-fit: contain;
            width: calc(100vw - min(get-vw(403px), 403px));
        }
    }

    &-subtext {
        font-family: RedHatDisplay-Light, serif;
        font-size: min(
            get-vw($secondary-text-font-size),
            $secondary-text-font-size
        );
        width: min(get-vw(110px), 110px);
        line-height: 100.9%;
        color: var(--vt-c-grey-1);
        margin-top: min(get-vw(160px), 160px);
        position: relative;
        right: min(get-vw(60px), 60px);
    }
}

.po-img-wrap-text-enter-active {
    transition: all 0.3s ease-out;
}

.po-img-wrap-text-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.po-img-wrap-text-enter-from,
.po-img-wrap-text-leave-to {
    transform: translateX(min(get-vw(20px), 20px));
    opacity: 0;
}
</style>
