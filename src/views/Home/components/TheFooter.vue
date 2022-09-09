<template>
    <v-footer padless>
        <v-col class="text-center" cols="12">
            <v-col
                v-if="$route.path === '/pizza-ghost'"
                class="po-col d-flex flex-column justify-center"
            >
                <div class="d-flex justify-center">
                    Project was completed in 2022
                </div>
                <div class="d-flex justify-center mt-custom-4">
                    Thank you for watching
                </div>
                <div class="d-flex justify-center mt-custom-4">
                    please contact me
                </div>
            </v-col>

            <v-col class="po-col">
                {{ new Date().getFullYear() }} —
                <strong>Olga Kharytonova</strong>
            </v-col>
        </v-col>
    </v-footer>
</template>

<script>
export default {
    name: 'TheFooter',
};
</script>

<style lang="scss" scoped>
@import '../../../styles/functions.scss';
@import '../../../styles/vars.scss';

.v-footer::v-deep {
    position: relative;
    &:before {
        content: '';
        position: absolute;
        top: 1px;
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
        left: min(get-vw(403px), 403px);
        z-index: 1000;
    }
}

.po-footer {
    border-top: 1px solid #5e5e5e;

    &-text {
        padding-top: min(get-vw(100px), 100px);
        padding-bottom: min(get-vw(237px), 237px);
        margin-left: min(get-vw(403px), 403px);
        margin-right: min(get-vw(284px), 284px);
        border-left: 1px solid var(--vt-c-grey-1);
        text-transform: uppercase;

        div {
            font-family: Cinzel-Regular, serif;
            color: var(--vt-c-grey-1);
        }
    }
}

.po-col {
    font-size: min(get-vw(16px), 16x);
    margin-top: min(get-vw(16px), 16px);
}
</style>
