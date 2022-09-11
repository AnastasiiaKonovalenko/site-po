<script>
export default {
    name: 'TheMenu',
};
</script>

<template>
    <div class="po-1 d-flex">
        <div>
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
    </div>
</template>

<style lang="scss" scoped>
@import '../../../styles/functions.scss';
@import '../../../styles/vars.scss';
.w {
    margin: min(get-vw(200px), 200px) 0 min(get-vw(42px), 42px) 0;
    width: min(get-vw(199px), 199px);
}
.po {
    &-1 {
        margin-right: min(get-vw(40px), 40px);
        z-index: 1;
    }

    &-img {
        height: min(get-vw(199px), 199px);
        object-fit: contain;
    }

    &-img-wrap {
        border-top: 1px solid transparent;
        border-bottom: 1px solid transparent;
        box-sizing: border-box;
        margin: min(get-vw(42px), 42px) 0 0 0;
        padding-left: min(get-vw(164px), 164px);
        align-items: end;
    }

    &-menu {
        margin-top: min(get-vw(123px), 123px);
    }

    &-my-name {
        font-family: RedHatDisplay-Light, serif;
        color: var(--color-text-lite);
        font-size: min(
            get-vw($third-party-text-font-size),
            $third-party-text-font-size
        );

        padding-bottom: min(get-vw(81px), 81px);

        & div:first-child {
            line-height: 100.9%;
        }

        & div:nth-child(2) {
            font-size: min(
                get-vw($secondary-text-font-size),
                $secondary-text-font-size
            );
            line-height: 100.9%;
        }
    }
}
</style>
