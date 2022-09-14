<template>
    <v-footer class="po-footer d-flex" padless>
        <div class="text-center flex-grow-1">
            <div class="d-flex justify-center">
                Thank you for watching!
            </div>
            <div class="mt-3 mb-1">
                Olga Kharytonova -
                <strong>{{ new Date().getFullYear() }}</strong>
            </div>

            <div class="po-footer-3">
                <strong>
                    <a href="mailto:womkad@gmail.com">womkad@gmail.com</a>
                </strong>
                <span class="ml-1">
                    <a target="_blank" href="tel:+37062527439">
                        +370 625 27 439
                    </a>
                </span>
            </div>
        </div>
    </v-footer>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '../../../styles/functions.scss';
@import '../../../styles/vars.scss';

.po-footer {
    padding-top: 48px;
    padding-bottom: 48px;
    color: var(--vt-c-grey-1);
    font-size: 12px;

    &-3 {
        font-family: RedHatDisplay-Regular, serif;
    }
}

.po-col {
    font-size: 12px;
    margin-top: 12px;
}

a {
    font-style: unset;
    text-decoration: unset;
}
</style>
