<template>
    <div
        ref="sticky-container" class="position-relative d-flex flex-grow-1">
        <div
            ref="sticky-content"
            class="d-flex flex-grow-1 justify-end"
            :class="{ 'position-fixed': isMenuFixed }"
        >
            <ul
                @mouseleave="setMarkerTop(null)"
                class="po-list position-relative"
            >
                <Transition name="fade">
                    <li
                        v-if="markerTop > -42"
                        :style="{ top: `${markerTop}%` }"
                        class="po-menu-marker position-absolute"
                    ></li>
                </Transition>

                <li
                    v-for="(item, idx) in menuItems"
                    :key="idx"
                    class="po-list-item d-flex justify-end"
                    :class="{
                        'po-list-item-active': item.path === $route.path,
                    }"
                    @click="$router.push(`${item.path}`)"
                    @mouseenter="setMarkerTop(idx)"
                    @mouseleave="clearTimeoutHover"
                >
                    {{ item.title }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
let timeoutHover = null;

export default {
    name: 'TheMenuList',
    props: {
        menuItems: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            markerVerticalPosition: 0,
            isMenuFixed: false,
            markerTop: -100,
        };
    },
    watch: {
        '$route.path': {
            handler: function() {
                setTimeout(() => {
                    this.setMarkerTop(null)
                });
            },
            deep: true,
            immediate: true,
        }
    },
    mounted() {
        setTimeout(() => {
            this.setMarkerTop(null)
        }, 50);
        window.addEventListener('scroll', this.setIsMenuFixed);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.setIsMenuFixed);
    },

    methods: {
        setIsMenuFixed() {
            console.log(this.$refs['sticky-container'].getBoundingClientRect());
            this.isMenuFixed =
                this.$refs['sticky-container'].getBoundingClientRect().top <= 0;
        },
        clearTimeoutHover() {
            if (timeoutHover) {
                clearTimeout(timeoutHover);
            }
        },
        setMarkerTop(idx) {
            this.clearTimeoutHover();
            timeoutHover = setTimeout(() => {
                if (idx === null) {
                    switch (this.$route.path) {
                        case '/':
                            this.markerTop = 18;
                            break;
                        case '/cv':
                            this.markerTop = 48;
                            break;
                        case '/contacts':
                            this.markerTop = 78;
                            break;

                        case '/pizza-ghost':
                            this.markerTop = -39;
                            break;
                    }
                } else {
                    switch (idx) {
                        case 0:
                            this.markerTop = 18;
                            break;
                        case 1:
                            this.markerTop = 48;
                            break;
                        case 2:
                            this.markerTop = 78;
                            break;
                    }
                }
            }, 50);
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../../../styles/functions.scss';
@import '../../../styles/vars.scss';
.position-fixed {
    position: fixed;
    top: 0;
    left: min(get-vw(195px), 195px);
}
.po {
    &-menu-marker {
        left: 132%;
        height: min(get-vw(9px), 9px);
        width: min(get-vw(9px), 9px);
        border-radius: 50%;
        background-color: var(--vt-c-grey-1);
        transition: all 0.3s ease-out;
    }

    &-list {
        padding: min(get-vw(12px), 12px) 0 min(get-vw(12px), 12px) 0;
        margin: min(get-vw(8px), 8px) 0 min(get-vw(8px), 8px) 0;
        height: max-content;
        &-item {
            cursor: pointer;
            padding: min(get-vw(28px), 28px) 0 min(get-vw(28px), 28px) 0;

            &:hover {
                color: black;
            }

            &-active {
                color: black;
            }
        }
    }
}
li {
    font-size: min(
        get-vw($secondary-text-font-size),
        $secondary-text-font-size
    );
    color: var(--vt-c-grey-1);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
