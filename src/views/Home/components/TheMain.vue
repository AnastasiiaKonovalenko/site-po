<template>
    <div class="iii d-flex flex-grow-1 pt-10">
        <div class="iii_left d-flex">
            <TheMenuList :menu-items="menuItems" />
        </div>
        <div class="iii_right d-flex position-relative">
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
};
</script>

<style lang="scss" scoped>
.iii {
    margin-right: 284px;
    align-items: stretch;
    border-right: 1px solid transparent;

    &_left {
        width: 403px;
        min-width: 403px;
        padding-top: 114px;
        padding-right: 54px;
    }

    &_right {
        padding-bottom: 104px;
        box-sizing: border-box;
        margin-right: 452px;
        padding-left: 43px;
        border-left: 1px solid var(--vt-c-grey-1);
    }
}

.po {
    &-menu-marker {
        top: 250px;
        left: -5px;
        height: 9px;
        width: 9px;
        border-radius: 50%;
        background-color: var(--vt-c-grey-1);
    }
}
</style>
