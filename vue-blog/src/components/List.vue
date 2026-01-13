<script setup>
    const props = defineProps({
        prdItem : Object,
    });
</script>

<template>
    <div
        v-for="(item, idx) in props.prdItem"
        :key="idx"
        @click="$router.push(`/detail/${idx}`)">
        <h5>{{ item.title }}</h5>
        <p>{{ item.date }}</p>
    </div>
</template>


<style lang="scss" scoped>

</style>