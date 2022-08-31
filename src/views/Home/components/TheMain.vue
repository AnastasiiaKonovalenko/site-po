<template>
    <div class="iii mt-10">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'TheMain',
};
</script>

<style lang="scss" scoped>
.iii {
    margin-left: 403px;
    margin-right: 284px;
    border-left: 1px solid var(--vt-c-grey-1);
    height: 1000px;

}
</style>
