<template>
    <div class="po-footer d-flex justify-center align-center">
        <div class="po-footer-text flex-grow-1 d-flex flex-column justify-center align-center">
            <div>Project was completed in 2022</div>
            <div>you for watching</div>
            <div>please contact me</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheFooter',
};
</script>

<style lang="scss" scoped>
@import '../../../styles/_variables.scss';

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
