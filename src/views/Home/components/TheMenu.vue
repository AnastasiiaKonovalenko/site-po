<script>
import BurgerIcon from '../../../components/icons/BurgerIcon.vue'
export default {
    name: 'TheMenu',
    components: { BurgerIcon },
};
</script>

<template>
    <div class="po-1">
        <div class="po-img-wrap d-flex-col main-bg-1">
            <div>
                <div class="po-menu" @click="$emit('set-is-header-visible')">
                    <BurgerIcon />
                </div>
                <img
                    class="po-img"
                    src="../../../assets/photo.png"
                    alt="my_photo"
                />
                <div class="po-my-name d-flex-col">
                    <div>Olha</div>
                    <div>Kharytonova</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.po {
    &-1 {
        margin-right: 42px;
        width: calc(22vw - 21px);
        z-index: 1;
    }

    &-img {
        margin: 56px 0;
        width: 198px;
        object-fit: contain;
    }

    &-img-wrap {
        margin: 42px 0 0 0;
        width: 100%;
        height: 573px;
        align-items: end;
    }

    &-menu {
        margin-top: 123px;
    }

    &-my-name {
        color: var(--color-text-lite);
        font-size: 30px;

        & div:first-child {
            margin-bottom: 15px;
        }

        & div:nth-child(2) {
            font-size: 20px;
        }
    }

}
</style>
