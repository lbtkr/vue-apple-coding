<template>
    {{ Number($route.params.id) + 1 }}
    
    <div>
        <h2>상세페이지</h2>
        <h3>{{ props.prdItem[$route.params.id].title }}</h3>
        <p>{{ props.prdItem[$route.params.id].content }}</p>
        <button @click="$router.go(-1)">뒤로</button>
        <router-view />
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';

    const props = defineProps({
        prdItem : Object,
    });
</script>

<style lang="scss" scoped>

</style>