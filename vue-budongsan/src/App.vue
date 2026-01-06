<template>
    <Navigation />
    <Shop />
    
    <Modal v-if="store.modalItem.open"/>
</template>

<script setup>
    import Navigation from './components/Navigation.vue';
    import Shop from './components/Shop.vue';
    import Modal from './components/Modal.vue';
    
    import { useProductStore } from './store/store';

    const store = useProductStore();

</script>

<style lang="scss" scoped>

</style>