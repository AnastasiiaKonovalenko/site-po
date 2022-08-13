<script>
import TheMenu from './components/TheMenu.vue';
export default {
    components: { TheMenu },
    data() {
        return {
            isHeaderVisible: true,
            isBig: false,
            poMenuImgWrapTextVisible: true,
        };
    },
};
</script>

<template>
    <main class="po-main">
        <TheMenu @set-is-header-visible="isHeaderVisible = !isHeaderVisible" />

        <div class="po-2 d-flex-row">
            <div class="po-header">
                <Transition name="slide-fade">
                    <h1 v-if="isHeaderVisible" class="header">
                        PRODUCT DESIGNER
                    </h1>
                </Transition>
            </div>

            <div
                class="po-menu-img-wrap"
                @mouseenter="poMenuImgWrapTextVisible = true"
                @mouseleave="poMenuImgWrapTextVisible = false"
            >
                <Transition name="po-img-wrap-text">
                    <div
                        v-if="poMenuImgWrapTextVisible"
                        class="po-menu-img-wrap-text"
                    >
                        <div class="po-menu-img-wrap-header">
                            See Pizza Ghost project
                        </div>
                        <div class="po-menu-img-wrap-p">
                            booklet and application concept for ordering a
                            customized pizza
                        </div>
                    </div>
                </Transition>

                <img
                    class="po-menu-img"
                    :class="{ big: isBig }"
                    @click="isBig = true"
                    src="../../assets/pizza_broshur.png"
                    alt="pizza_broshur"
                />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.po {
    &-main {
        width: 100%;
        display: flex;
        flex-grow: 1;
        align-items: stretch;
    }

    &-2 {
        width: calc(100vw - 22vw - 21px);
    }

    &-header {
        background-color: var(--vt-c-black);
        height: 615px;
        width: calc(100% - 320px);

        & h1 {
            font-family: RedHatDisplay-Bold, sans-serif;
            font-size: 115px;
            color: #5e5e5e;
            max-width: 800px;
            top: 231px;
            position: relative;
            right: 50px;
        }
    }

    &-menu-img-wrap {
        cursor: default;
        display: flex;
        right: -160px;
        margin-top: 42px;
        transition: 0.3s;
        position: absolute;

        &-text {
            font-family: RedHatDisplay-Regular, sans-serif;
            color: white;
            width: 130px;
            margin-right: 20px;
            transition: all 0.6ms;
        }

        &-header {
            font-size: 28px;
            line-height: 100.17%;
            margin-bottom: 40px;
            text-transform: uppercase;
        }

        &-p {
            font-size: 18px;
            text-transform: none;
        }

        &:hover {
            right: 0;
        }
    }

    &-menu-img {
        width: 450px;
        object-fit: contain;
    }
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(-100%);
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
