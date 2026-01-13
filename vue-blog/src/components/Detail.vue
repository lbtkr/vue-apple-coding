<template>
    {{ $route.params.id }}
    <div>
        <h2>상세페이지</h2>
        <h3>{{ props.prdItem[$route.params.id].title }}</h3>
        <p>{{ props.prdItem[$route.params.id].content }}</p>
        <button>뒤로</button>
        <router-view />
    </div>
</template>

<script setup>
    const props = defineProps({
        prdItem : Object,
    })
</script>

<style lang="scss" scoped>

</style>