<template>
    <div
        :class="{ 'iii-bottom': !isTop }"
        class="iii d-flex flex-grow-1 pt-custom-10"
    >
        <div class="iii_left d-flex">
            <TheMenuList :menu-items="menuItems" />
        </div>
        <div
            :class="{ 'iii_right-full': isFull }"
            class="iii_right d-flex position-relative"
        >
            <router-view />
        </div>
    </div>
</template>

<script>
import TheMenuList from './TheMenuList.vue';
export default {
    name: 'TheMain',
    components: { TheMenuList },
    data() {
        return {
            menuItems: [
                {
                    title: 'About me',
                    path: '/',
                },
                {
                    title: 'Download CV',
                    path: '/cv',
                },
                {
                    title: 'Contacts',
                    path: '/contacts',
                },
            ],
        };
    },
    computed: {
        isTop() {
            return (
                this.$route.path === '/' ||
                this.$route.path === '/cv' ||
                this.$route.path === '/contacts'
            );
        },
        isFull() {
            return (
                this.$route.path === '/pizza-ghost' ||
                this.$route.path === '/cadabra' ||
                this.$route.path === '/logos'
            );
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../../../styles/functions.scss';
@import '../../../styles/vars.scss';

.iii {
    margin-right: min(get-vw(284px), 284px);
    align-items: stretch;
    border-right: 1px solid transparent;
    transition: all 0.4s ease-out;

    &-bottom {
        padding-top: 0;
        transition: all 0.4s ease-out;
    }

    &_left {
        width: min(get-vw(403px), 403px);
        min-width: min(get-vw(403px), 403px);
        padding-top: min(get-vw(265px), 265px);
        padding-right: min(get-vw(54px), 54px);
        transition: all 0.4s ease-out;
    }

    &_right {
        padding-bottom: min(get-vw(104px), 104px);
        box-sizing: border-box;
        margin-right: min(get-vw(452px), 452px);
        padding-left: min(get-vw(43px), 43px);
        border-left: 1px solid var(--vt-c-grey-1);

        &-full {
            margin-right: min(get-vw(304px), 304px);
        }
    }
}

.po {
    &-menu-marker {
        top: min(get-vw(250px), 250px);
        left: min(get-vw(-5px), -5px);
        height: min(get-vw(9px), 9px);
        width: min(get-vw(9px), 9px);
        border-radius: 50%;
        background-color: var(--vt-c-grey-1);
    }
}
</style>
