<script setup>
    const props = defineProps({
        prdItem : Object,
    });
</script>

<template>
    <div>
        <h5>{{ props.prdItem.title }}</h5>
        <p>{{ props.prdItem.date }}</p>
    </div>
</template>


<style lang="scss" scoped>

</style>