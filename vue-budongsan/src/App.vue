<template>
    <Navigation />
    <DiscountEvent />
    
    <div class="container">
        <Card   v-for="item in store.productArr"
                :key="item.id"
                :prdItem="item"/>
    </div>
    <Modal v-if="store.modalItem.open"/>
</template>

<script setup>
    import DiscountEvent from './components/discountEvent.vue';
    import Navigation from './components/Navigation.vue';
    import Card from './components/Card.vue';
    import Modal from './components/Modal.vue';
    
    import { useProductStore } from './store/store';

    const store = useProductStore();
</script>