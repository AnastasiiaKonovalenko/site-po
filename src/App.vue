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
    })
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

.mt-custom-13 {
    margin-top: min(get-vw(52px), 52px);
}

.mt-custom-15 {
    margin-top: min(get-vw(60px), 60px);
}

.mt-custom-16 {
    margin-top: min(get-vw(64px), 64px);
}

.mt-custom-17 {
    margin-top: min(get-vw(68px), 68px);
}

.mt-custom-19 {
    margin-top: min(get-vw(76px), 76px);
}

.mt-custom-20 {
    margin-top: min(get-vw(80px), 80px);
}

.mt-custom-21 {
    margin-top: min(get-vw(84px), 84px);
}

.mt-custom-22 {
    margin-top: min(get-vw(88px), 88px);
}

.mt-custom-23 {
    margin-top: min(get-vw(92px), 92px);
}

.mt-custom-27 {
    margin-top: min(get-vw(108px), 108px);
}

.mt-custom-29 {
    margin-top: min(get-vw(116px), 116px);
}

.mt-custom-31 {
    margin-top: min(get-vw(124px), 124px);
}

.mt-custom-33 {
    margin-top: min(get-vw(132px), 132px);
}

.mt-custom-35 {
    margin-top: min(get-vw(140px), 140px);
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

//######################## margin-left ##################
.ml-custom-1 {
    margin-left: min(get-vw(4px), 4px);
}

.ml-custom-10 {
    margin-left: min(get-vw(40px), 40px);
}

.ml-custom-15 {
    margin-left: min(get-vw(60px), 60px);
}

.ml-custom-16 {
    margin-left: min(get-vw(64px), 64px);
}

.ml-custom-20 {
    margin-left: min(get-vw(80px), 80px);
}
//######################## padding-top ##################
.pt-custom-1 {
    padding-top: min(get-vw(4px), 4px);
}

.pt-custom-2 {
    padding-top: min(get-vw(8px), 8px);
}

.pt-custom-10 {
    padding-top: min(get-vw(40px), 40px);
}

.pt-custom-16 {
    padding-top: min(get-vw(64px), 64px);
}

.pt-custom-25 {
    padding-top: min(get-vw(100px), 100px);
}
</style>