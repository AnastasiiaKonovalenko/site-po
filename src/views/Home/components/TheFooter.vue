<template>
    <v-footer padless>
        <v-col class="text-center" cols="12">
            <v-col class="mt-4">
                {{ new Date().getFullYear() }} —
                <strong>Olga Kharytonova</strong>
            </v-col>

            <slot></slot>
        </v-col>
    </v-footer>
</template>

<script>
export default {
    name: 'TheFooter',
};
</script>

<style lang="scss" scoped>
@import '../../../styles/_variables.scss';
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
        left: 403px;
        z-index: 1000;
    }
}

.po-footer {
    border-top: 1px solid #5e5e5e;

    &-text {
        padding-top: 100px;
        padding-bottom: 237px;
        margin-left: 403px;
        margin-right: 284px;
        border-left: 1px solid var(--vt-c-grey-1);
        text-transform: uppercase;

        div {
            font-family: Cinzel-Regular, serif;
            color: var(--vt-c-grey-1);
        }
    }
}
</style>
