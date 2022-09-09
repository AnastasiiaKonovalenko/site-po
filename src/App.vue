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

//################### margin-top ##################

.mt-custom-1 {
    margin-top: min(get-vw(4px), 4px);
}

.mt-custom-2 {
    margin-top: min(get-vw(8px), 8px);
}

.mt-custom-3 {
    margin-top: min(get-vw(12px), 12px);
}

.mt-custom-4 {
    margin-top: min(get-vw(16px), 16px);
}

.mt-custom-5 {
    margin-top: min(get-vw(20px), 20px);
}

.mt-custom-10 {
    margin-top: min(get-vw(40px), 40px);
}

.mt-custom-11 {
    margin-top: min(get-vw(44px), 44px);
}

.mt-custom-12 {
    margin-top: min(get-vw(48px), 48px);
}

.mt-custom-15 {
    margin-top: min(get-vw(60px), 60px);
}

.mt-custom-16 {
    margin-top: min(get-vw(64px), 64px);
}

.mt-custom-20 {
    margin-top: min(get-vw(100px), 100px);
}

//######################### margin-bottom ########################

.mb-custom-1 {
    margin-bottom: min(get-vw(4px), 4px);
}

.mb-custom-2 {
    margin-bottom: min(get-vw(8px), 8px);
}

.mb-custom-4 {
    margin-bottom: min(get-vw(16px), 16px);
}

.mb-custom-11 {
    margin-bottom: min(get-vw(44px), 44px);
}

.mb-custom-15 {
    margin-bottom: min(get-vw(64px), 64px);
}

.mb-custom-16 {
    margin-bottom: min(get-vw(64px), 64px);
}


//######################## padding-top ##################
.pt-custom-10 {
    padding-top: min(get-vw(40px), 40px);
}

.pt-custom-16 {
    padding-top: min(get-vw(64px), 64px);
}
</style>