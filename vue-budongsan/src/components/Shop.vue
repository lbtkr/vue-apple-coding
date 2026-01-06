<template>
    <div v-for="val in productArr" :key="val.id">
        <h4>{{ val.name }}</h4>
        <p>{{ val.price }} 만원</p>
    </div>
</template>

<script setup>
    const productArr = [
        { id: 1, name: '역삼동 원룸', price: 80 },
        { id: 2, name: '신림동 원룸', price: 85 },
        { id: 3, name: '강남동 원룸', price: 90 },
    ];
</script>

<style lang="scss" scoped>

</style>