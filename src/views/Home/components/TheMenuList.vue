<template>
    <div
        ref="sticky-container"
        class="position-relative d-flex flex-column flex-grow-1"
    >
        <div
            ref="sticky-content"
            class="d-flex flex-grow-1 flex-column align-end mt-custom-13"
            :class="{ 'position-fixed': isMenuFixed }"
        >
            <ul
                @mouseleave="setMarkerTop(null)"
                class="po-list position-relative"
            >
                <Transition name="fade">
                    <li
                        v-if="markerTop > -89 && $route.path !== '/logos'"
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
                    @click="goToPage(item.path)"
                    @mouseenter="setMarkerTop(idx)"
                    @mouseleave="clearTimeoutHover"
                >
                    <a
                        v-if="item.path === '/cv'"
                        :href="cvLink"
                        target="_blank"
                        >{{ item.title }}</a
                    >

                    <span v-else> {{ item.title }} </span>
                </li>
            </ul>
            <div class="d-flex justify-end">
                <Transition name="slide-fade">
                    <ul v-if="isContactsVisible">
                        <li
                            class="contacts-icon d-flex justify-center align-center rounded-circle"
                        >
                            <a
                                class="flex-grow-1"
                                target="_blank"
                                href="mailto:womkad@gmail.com"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="#858585"
                                        d="M22,6C22,4.9 21.1,4 20,4H4C2.9,4 2,4.9 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V6M20,6L12,11L4,6H20M20,18H4V8L12,13L20,8V18Z"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li class="contacts-icon mt-custom-10">
                            <a
                                class="flex-grow-1"
                                target="_blank"
                                href="https://wa.me/+380972815576"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="#858585"
                                        d="M12.04,2C6.58,2 2.13,6.45 2.13,11.91C2.13,13.66 2.59,15.36 3.45,16.86L2.05,22L7.3,20.62C8.75,21.41 10.38,21.83 12.04,21.83C17.5,21.83 21.95,17.38 21.95,11.92C21.95,9.27 20.92,6.78 19.05,4.91C17.18,3.03 14.69,2 12.04,2M12.05,3.67C14.25,3.67 16.31,4.53 17.87,6.09C19.42,7.65 20.28,9.72 20.28,11.92C20.28,16.46 16.58,20.15 12.04,20.15C10.56,20.15 9.11,19.76 7.85,19L7.55,18.83L4.43,19.65L5.26,16.61L5.06,16.29C4.24,15 3.8,13.47 3.8,11.91C3.81,7.37 7.5,3.67 12.05,3.67M8.53,7.33C8.37,7.33 8.1,7.39 7.87,7.64C7.65,7.89 7,8.5 7,9.71C7,10.93 7.89,12.1 8,12.27C8.14,12.44 9.76,14.94 12.25,16C12.84,16.27 13.3,16.42 13.66,16.53C14.25,16.72 14.79,16.69 15.22,16.63C15.7,16.56 16.68,16.03 16.89,15.45C17.1,14.87 17.1,14.38 17.04,14.27C16.97,14.17 16.81,14.11 16.56,14C16.31,13.86 15.09,13.26 14.87,13.18C14.64,13.1 14.5,13.06 14.31,13.3C14.15,13.55 13.67,14.11 13.53,14.27C13.38,14.44 13.24,14.46 13,14.34C12.74,14.21 11.94,13.95 11,13.11C10.26,12.45 9.77,11.64 9.62,11.39C9.5,11.15 9.61,11 9.73,10.89C9.84,10.78 10,10.6 10.1,10.45C10.23,10.31 10.27,10.2 10.35,10.04C10.43,9.87 10.39,9.73 10.33,9.61C10.27,9.5 9.77,8.26 9.56,7.77C9.36,7.29 9.16,7.35 9,7.34C8.86,7.34 8.7,7.33 8.53,7.33Z"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li class="contacts-icon mt-custom-10">
                            <a
                                class="flex-grow-1"
                                target="_blank"
                                href="https://www.linkedin.com/in/olha-/"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="#858585"
                                        d="M19,3C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3H19M18.5,18.5V13.2C18.5,11.4 17.04,9.94 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17C15.08,12.17 15.71,12.8 15.71,13.57V18.5H18.5M6.88,8.56C7.81,8.56 8.56,7.81 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19C5.95,5.19 5.19,5.95 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li class="contacts-icon mt-custom-10">
                            <a
                                class="flex-grow-1"
                                target="_blank"
                                href="tel:+37062527439"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="#858585"
                                        d="M20.07,4.93C21.88,6.74 23,9.24 23,12C23,14.76 21.88,17.26 20.07,19.07L18.66,17.66C20.11,16.22 21,14.22 21,12C21,9.79 20.11,7.78 18.66,6.34L20.07,4.93M17.24,7.76C18.33,8.85 19,10.35 19,12C19,13.65 18.33,15.15 17.24,16.24L15.83,14.83C16.55,14.11 17,13.11 17,12C17,10.89 16.55,9.89 15.83,9.17L17.24,7.76M13,10C14.1,10 15,10.9 15,12C15,13.1 14.1,14 13,14C11.9,14 11,13.1 11,12C11,10.9 11.9,10 13,10M11.5,1C12.88,1 14,2.12 14,3.5V8H12V4H3V19H12V16H14V20.5C14,21.88 12.88,23 11.5,23H3.5C2.12,23 1,21.88 1,20.5V3.5C1,2.12 2.12,1 3.5,1H11.5Z"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </Transition>
            </div>
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
            isContactsVisible: false,
        };
    },
    computed: {
        cvLink() {
            return new URL(`../../../assets/cv/CV_OK.pdf`, import.meta.url)
                .href;
        },
    },
    watch: {
        '$route.path': {
            handler: function () {
                setTimeout(() => {
                    this.setMarkerTop(null);
                });
            },
            deep: true,
            immediate: true,
        },
    },
    mounted() {
        setTimeout(() => {
            this.setMarkerTop(null);
        }, 4800);
        window.addEventListener('scroll', this.setIsMenuFixed);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.setIsMenuFixed);
    },

    methods: {
        goToPage(path) {
            if (path === '/cv') {
            } else if (path === '/contacts') {
                this.isContactsVisible = !this.isContactsVisible;
            } else {
                this.$route.path !== path ? this.$router.push(`${path}`) : true;
            }
        },
        setIsMenuFixed() {
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
                            this.markerTop = 10;
                            break;
                        case '/pizza-ghost':
                            this.markerTop = 25;
                            break;
                        case '/cadabra':
                            this.markerTop = 41;
                            break;
                        case '/logos':
                            this.markerTop = 57;
                            break;
                        case '/contacts':
                            this.markerTop = 73;
                            break;
                        case '/cv':
                            this.markerTop = 88;
                            break;
                    }
                } else {
                    switch (idx) {
                        case 0:
                            this.markerTop = 10;
                            break;
                        case 1:
                            this.markerTop = 25;
                            break;
                        case 2:
                            this.markerTop = 41;
                            break;
                        case 3:
                            this.markerTop = 57;
                            break;
                        case 4:
                            this.markerTop = 73;
                            break;
                        case 5:
                            this.markerTop = 88;
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
    left: min(get-vw(153.5px), 153.5px);
}
.po {
    &-menu-marker {
        left: min(get-vw(204px), 204px);
        height: min(get-vw(10px), 10px);
        width: min(get-vw(10px), 10px);
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
            padding: min(get-vw(20px), 20px) 0 min(get-vw(20px), 20px) 0;

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

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateY(100px);
}

.contacts-icon {
    width: min(get-vw(40px), 40px);
    height: min(get-vw(40px), 40px);
}

a {
    font-style: unset;
    text-decoration: unset;
}
</style>
