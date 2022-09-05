<template>
    <div ref="sticky-container" class="position-relative d-flex flex-grow-1">
        <div
            ref="sticky-content"
            class="d-flex flex-grow-1 justify-end"
            :class="{ 'position-fixed': isMenuFixed }"
        >
            <ul
                @mouseleave="setMarkerTop(null)"
                class="po-list position-relative py-3 my-2"
            >
                <li
                    :style="{ top: `${markerTop}px` }"
                    class="po-menu-marker position-absolute"
                ></li>
                <li
                    v-for="(item, idx) in menuItems"
                    :key="idx"
                    class="po-list-item d-flex justify-end py-7"
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
            markerTop: 45,
        };
    },
    mounted() {
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
                            this.markerTop = 45;
                            break;
                        case '/cv':
                            this.markerTop = 115;
                            break;
                        case '/contacts':
                            this.markerTop = 187;
                            break;
                    }
                } else {
                    switch (idx) {
                        case 0:
                            this.markerTop = 45;
                            break;
                        case 1:
                            this.markerTop = 115;
                            break;
                        case 2:
                            this.markerTop = 187;
                            break;
                    }
                }
            }, 50);
        },
    },
};
</script>

<style lang="scss" scoped>
.position-fixed {
    position: fixed;
    top: 0;
    left: 195px;
}
.po {
    &-menu-marker {
        right: -59px;
        height: 9px;
        width: 9px;
        border-radius: 50%;
        background-color: var(--vt-c-grey-1);
        transition: all 0.3s ease-out;
    }

    &-list {
        height: max-content;
        &-item {
            cursor: pointer;

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
    font-size: 20px;
    color: var(--vt-c-grey-1);
}
</style>
