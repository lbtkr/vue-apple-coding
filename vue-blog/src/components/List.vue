<script setup>
    const props = defineProps({
        prdItem : Object,
    });
</script>

<template>
    <div
        v-for="(item, idx) in props.prdItem"
        :key="idx"
        @click="$router.push({
            name: 'Detail',
            params: { id }
        })"
    >
        <h5>{{ item.title }}</h5>
        <p>{{ item.date }}</p>
    </div>
</template>


<style lang="scss" scoped>

</style>