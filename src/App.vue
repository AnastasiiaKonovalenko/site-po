<template>
    <v-app>
        <v-main class="overflow-x-hidden">
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'App',

    data: () => ({
        //
    }),
};
</script>
<style lang="scss">
@import './styles/main.css';
@import './styles/functions.scss';
.mt-custom-1 {
    margin-top: min(get-vw(4px), 4px);
}

.mt-custom-11 {
    margin-top: min(get-vw(44px), 44px);
}

.mt-custom-16 {
    margin-top: min(get-vw(64px), 64px);
}

.mb-custom-11 {
    margin-bottom: min(get-vw(44px), 44px);
}

.mb-custom-16 {
    margin-bottom: min(get-vw(64px), 64px);
}

.pt-custom-16 {
    padding-top: min(get-vw(64px), 64px);
}

.pt-custom-10 {
    padding-top: min(get-vw(40px), 40px);
}
</style>