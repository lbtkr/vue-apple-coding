<template>
    <img src="./assets/vue.svg" alt="">
    <div v-for="val in products" :key="val">
        <h4>{{ val }}</h4>
        <p>80 만원</p>
    </div>
</template>

<script setup>
    const products = ['역삼동 원룸', '신림동 원룸', '강남동 원룸'];

</script>

<style lang="scss" scoped>

</style>