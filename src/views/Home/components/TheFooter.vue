<template>
    <v-footer class="po-footer d-flex" :class="{ aaa: isLogos }" padless>
        <div class="text-center flex-grow-1">
            <div class="po-footer-1 d-flex justify-center">
                Thank you for watching!
            </div>
            <div class="po-footer-2 mt-custom-10 mb-custom-2">
                Olga Kharytonova -
                <strong>{{ new Date().getFullYear() }}</strong>
            </div>

            <div class="po-footer-3">
                <strong>
                    <a href="mailto:womkad@gmail.com">womkad@gmail.com</a>
                </strong>
                <span class="ml-custom-1">
                    <a target="_blank" href="tel:+37062527439">
                        +370 625 27 439
                    </a>
                </span>
            </div>
        </div>
    </v-footer>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isLogos = computed(() => {
    return route.path === '/logos';
});
</script>

<style lang="scss" scoped>
@import '../../../styles/functions.scss';
@import '../../../styles/vars.scss';

.v-footer::v-deep {
    position: relative;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background-color: var(--vt-c-grey-1);
        z-index: 1000;
    }
    &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 1px;
        background-color: var(--vt-c-grey-1);
        left: min(get-vw(362px), 362px);
        z-index: 1000;
    }
}

.po-footer {
    padding-top: min(get-vw(48px), 48px);
    padding-bottom: min(get-vw(48px), 48px);
    color: var(--vt-c-grey-1);
    font-size: min(get-vw(18px), 18px);

    &-3 {
        font-family: RedHatDisplay-Regular, serif;
    }
}

.po-col {
    font-size: min(get-vw(16px), 16x);
    margin-top: min(get-vw(16px), 16px);
}

.aaa {
    &:after {
        display: none;
    }
}

a {
    font-style: unset;
    text-decoration: unset;
}
</style>
