<template>
    <Navigation />
    <Shop />
</template>

<script setup>
    import Navigation from './components/Navigation.vue';
    import Shop from './components/Shop.vue';
    
    import { useProductStore } from './store/store';

    const store = useProductStore();

</script>

<style lang="scss" scoped>

</style>