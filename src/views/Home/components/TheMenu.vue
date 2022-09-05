<script>
export default {
    name: 'TheMenu',
};
</script>

<template>
    <div class="po-1 d-flex mr-10">
        <div class="po-img-wrap main-bg-grey">
            <div class="w">
                <img
                    class="po-img"
                    src="../../../assets/photo.png"
                    alt="my_photo"
                />
            </div>
            <div class="po-my-name">
                <div>Olha</div>
                <div>Kharytonova</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../styles/_variables.scss';
.w {
    margin: 200px 0 42px 0;
    width: 199px;
}
.po {
    &-1 {
        z-index: 1;
    }

    &-img {
        height: 199px;
        object-fit: contain;
    }

    &-img-wrap {
        border-top: 1px solid transparent;
        border-bottom: 1px solid transparent;
        box-sizing: border-box;
        margin: 42px 0 0 0;
        padding-left: 164px;
        align-items: end;
    }

    &-menu {
        margin-top: 123px;
    }

    &-my-name {
        font-family: Cinzel-Regular, serif;
        color: var(--color-text-lite);
        font-size: 30px;
        padding-bottom: 70px;

        & div:first-child {
            line-height: 30.27px;
        }

        & div:nth-child(2) {
            font-size: 20px;
            line-height: 20.18px;
        }
    }
}
</style>
