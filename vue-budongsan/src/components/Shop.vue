<script setup>
    import { useProductStore } from '../store/store';
    const store = useProductStore();
</script>

<template>
    <div v-for="item in store.productArr" :key="item.id">
        <h4>{{ item.name }}</h4>
        <p>{{ item.price }} 만원</p>
        <button @click="store.increaseCount(item.id)">허위매물신고 <span>신고수 : {{ item.count }}</span></button>
    </div>
</template>
