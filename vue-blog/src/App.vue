<script setup>
import Navbar from './components/Navbar.vue';
import List from './components/List.vue';
import { useProductStore } from './store/store';

const store = useProductStore();
</script>

<template>
    <Navbar />
    
    <div class="container mt-4">
        
        <router-view
            :prdItem="store.blogData"
        />
    </div>
    
</template>

<style scoped>

</style>
