<script setup></script>

<template>
    <RouterView />
</template>

<style lang="scss">
@import './styles/_variables.scss';
body {
    display: flex;
    flex-grow: 1;
}
.main-color-1 {
    color: $base-color;
}

.main-bg-1 {
    background-color: $base-color;
}
</style>
