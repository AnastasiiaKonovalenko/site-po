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
<style>
@import './styles/main.css';
</style>