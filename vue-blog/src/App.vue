<script setup>

import Navbar from './components/Navbar.vue';
import { useProductStore } from './store/store';

const store = useProductStore();
</script>

<template>
    <Navbar />
    <router-view
        :prdItem="store.blogData"
    />
    
</template>

<style scoped>
.container{max-width:100% !important;}
</style>
