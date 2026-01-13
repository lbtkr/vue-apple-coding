<script setup>
import Navbar from './components/Navbar.vue';
import List from './components/List.vue';
import { useProductStore } from './store/store';

const store = useProductStore();
</script>

<template>
    <Navbar />
    
    <div class="container mt-4">
        <List   v-for="(item, idx) in store.blogData"
                :key="idx"
                :prdItem="item"
        />
    </div>
</template>

<style scoped>

</style>
