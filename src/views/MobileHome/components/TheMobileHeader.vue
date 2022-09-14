<template>
    <div class="po-mobile-header d-flex flex-column position-relative">
        <div
            :class="{
                'po-mobile-header-background': !isBackgroundHidden,
                'po-mobile-header-background-hidden': isBackgroundHidden,
            }"
            class="po-mobile-header-background"
        ></div>
        <div class="po-mobile-header-top-subtext align-self-end mt-12 mb-1">
            UI/UX, Identity, Editorial, Graphic,
        </div>
        <div class="d-flex justify-space-between">
            <img
                class="po-mobile-header-avatar mr-2"
                src="../../../assets/photo.png"
                alt="this is me"
            />
            <h1 class="po-mobile-header-heading">PRODUCT DESIGNER</h1>
        </div>
        <div class="po-mobile-header-name mt-5 ml-13">OLHA Kharytonova</div>
        <div
            class="po-mobile-header-bottom-subtext mt-13 align-self-end mr-6 mb-10"
        >
            based in Vilnius, Lithuania
        </div>
    </div>
</template>

<script setup>
defineProps({
    isBackgroundHidden: Boolean,
});
</script>

<style lang="scss" scoped>
.po-mobile-header {
    color: var(--vt-c-grey-1);
    font-family: 'RedHatDisplay-Light', serif;

    &-background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        background-color: var(--vt-c-black);
        transition: all 0.8s ease-out;

        &-hidden {
            height: 0;
            transition: all 0.8s ease-out;
        }
    }

    &-top-subtext {
        font-size: 30px;
        width: 155px;
        line-height: 130%;
        z-index: 1;
    }

    &-avatar {
        position: relative;
        height: 185px;
        object-fit: cover;
        margin-left: -30px;
        z-index: 1;
    }

    &-heading {
        font-size: 35px;
        letter-spacing: 0.03em;
        line-height: 130%;
        z-index: 1;
    }

    &-name {
        font-size: 25px;
        width: 176px;
        line-height: 130%;
        z-index: 1;
    }

    &-bottom-subtext {
        font-size: 20px;
        line-height: 100.9%;
        width: 109px;
        z-index: 1;
    }
}
</style>
