<script>
import TheMenu from './components/TheMenu.vue';
import MenuImgItem from './components/MenuImgItem.vue';
import TheFooter from './components/TheFooter.vue';
import TheMain from './components/TheMain.vue';
export default {
    components: {
        TheMain,
        TheFooter,
        MenuImgItem,
        TheMenu,
    },
    data() {
        return {
            isHeaderVisible: true,
            isHeaderSubtextVisible: true,
            isBig: false,
            poMenuImgWrapTextVisible: false,
        };
    },
    watch: {
        '$route.path': {
            handler: function (path) {
                console.log(this.$route);
                if (path !== '/') {
                    this.isHeaderSubtextVisible = false;
                    this.isHeaderVisible = false;
                } else {
                    this.isHeaderSubtextVisible = true;
                    this.isHeaderVisible = true;
                }
                console.log(path);
            },
            deep: true,
            immediate: true,
        },
    },
    methods: {
        setIsHeaderVisible() {
            if (this.isHeaderSubtextVisible) {
                this.isHeaderSubtextVisible = !this.isHeaderSubtextVisible;
                setTimeout(() => {
                    this.isHeaderVisible = !this.isHeaderVisible;
                }, 200);
            } else {
                this.isHeaderVisible = !this.isHeaderVisible;
                setTimeout(() => {
                    this.isHeaderSubtextVisible = !this.isHeaderSubtextVisible;
                }, 200);
            }
        },
    },
};
</script>

<template>
    <div class="po-main">
        <div class="d-flex flex-grow-1 overflow-x-hidden">
            <TheMenu @set-is-header-visible="setIsHeaderVisible" />

            <div class="po-2 d-flex flex-grow-1">
                <div
                    :class="{ 'po-header-full-size': !isHeaderVisible }"
                    class="po-header flex-grow-1"
                >
                    <Transition name="slide">
                        <div class="d-flex" v-if="isHeaderVisible">
                            <h1 class="header">PRODUCT DESIGNER</h1>
                            <Transition name="slide-fade">
                                <div
                                    v-if="isHeaderSubtextVisible"
                                    class="po-header__subtext text-white"
                                >
                                    Identity, Editorial, Graphic
                                    <div class="po-subtext">
                                        based in Vilnius, Lithuania
                                    </div>
                                </div>
                            </Transition>
                        </div>
                    </Transition>
                </div>

                <div
                    :class="{ 'wrap-active': $route.path !== '/' }"
                    class="d-flex flex-column position-absolute wrap"
                >
                    <router-link to="/pizza-ghost">
                        <Transition name="slide-top">
                            <MenuImgItem
                                v-if="
                                    $route.path === '/' ||
                                    $route.path === '/pizza-ghost'
                                "
                                :is-active="$route.path === '/pizza-ghost'"
                                class="mt-11"
                                :class="{
                                    'opacity-0':
                                        $route.path !== '/pizza-ghost' &&
                                        $route.path !== '/',
                                }"
                                key="1"
                                img-src="pizza_broshur.jpg"
                            >
                                <div class="po-menu-img-wrap-header">
                                    See Pizza Ghost project
                                </div>
                                <div class="po-menu-img-wrap-p">
                                    booklet and application concept for ordering
                                    a customized pizza
                                </div>
                            </MenuImgItem>
                        </Transition>
                    </router-link>
                    <router-link to="/cadabra">
                        <MenuImgItem
                            v-if="
                                $route.path === '/' ||
                                $route.path === '/cadabra'
                            "
                            :is-active="$route.path === '/cadabra'"
                            :class="{
                                'mt-1': $route.path === '/',
                                'mt-11': $route.path === '/cadabra',
                            }"
                            key="2"
                            img-src="kadabra_broshur_22.jpg"
                        />
                    </router-link>
<!--                    <MenuImgItem-->
<!--                        v-if="$route.path === '/'"-->
<!--                        :is-active="false"-->
<!--                        class="mt-1"-->
<!--                        key="3"-->
<!--                        img-src="pizza_broshur.jpg"-->
<!--                    />-->
                </div>
            </div>
        </div>

        <TheMain />

        <TheFooter />
    </div>
</template>

<style lang="scss" scoped>
.po {
    &-header {
        background-color: var(--vt-c-black);
        margin-right: 284px;

        &-full-size {
            margin-right: 0;
            height: calc(100vw / 1.33 - 214px);
        }

        & h1 {
            font-family: RedHatDisplay-Bold, sans-serif;
            max-width: 600px;
            font-size: 117px;
            color: var(--vt-c-grey-1);
            margin-top: 225px;
            position: relative;
            right: 50px;
        }

        &__subtext {
            font-family: RedHatDisplay-Light, serif;
            font-size: 20px;
            width: 110px;
            margin-top: 265px;
            line-height: 100.9%;
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

    &-menu-img-wrap {
        &-header {
            font-size: 28px;
            line-height: 100.17%;
            margin-bottom: 40px;
        }

        &-p {
            font-size: 18px;
            text-transform: none;
        }
    }
}

.slide-enter-active {
    transition: all 0.3s ease-out;
}

.slide-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(-100%);
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.slide-top-enter-active {
    transition: all 0.3s ease-out;
}

.slide-top-leave-active {
    opacity: 0 !important;
    transition: all 0.4s ease-out;
}

.slide-top-enter-from,
.slide-top-leave-to {
    opacity: 0 !important;
    margin-bottom: -460px;
}

.wrap {
    left: 76%;
    transition: all 0.3s ease-out;

    &-active {
        left: 403px;
        transition: all 0.3s ease-out;
    }
}
</style>
