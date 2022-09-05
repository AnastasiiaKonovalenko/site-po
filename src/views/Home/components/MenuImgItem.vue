<template>
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
                big: isBig,
                'po-menu-img-hover': isHover,
                'po-menu-img-active': isActive,
            }"
            @click="isBig = true"
            :src="`${imageUrl}${imgSrc}`"
            alt="pizza_broshur"
        />
    </div>
</template>

<script>
export default {
    name: 'MenuImgItem',
    props: {
        imgSrc: {
            type: String,
            required: true,
        },
        isActive: {
            type: Boolean,
            required: true,
        },
    },
    setup() {
        const imageUrl = new URL('../../../assets/', import.meta.url).href;
        return { imageUrl };
    },
    data() {
        return {
            isBig: false,
            isHover: false,
        };
    },
};
</script>

<style lang="scss" scoped>
.po {
    &-menu-img-wrap {
        cursor: default;
        display: flex;
        transition: 0.3s;

        &-text {
            font-family: RedHatDisplay-Regular, sans-serif;
            color: white;
            width: 130px;
            margin-right: 20px;
            padding-right: 20px;
            transition: all 0.6ms;
            z-index: 1;
            left: -130px;
        }
    }

    &-menu-img {
        opacity: 0.6;
        position: relative;
        right: -202px;
        width: 450px;
        object-fit: contain;
        transition: all 0.3s ease-out;

        &-hover {
            opacity: 1;
            right: 0;
        }

        &-active {
            opacity: 1;
            right: 0;
            width: calc(100vw - 403px);
        }
    }

    &-subtext {
        font-family: RedHatDisplay-Light, serif;
        font-size: 20px;
        width: 110px;
        line-height: 100.9%;
        color: var(--vt-c-grey-1);
        margin-top: 160px;
        position: relative;
        right: 60px;
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
    transform: translateX(20px);
    opacity: 0;
}
</style>
