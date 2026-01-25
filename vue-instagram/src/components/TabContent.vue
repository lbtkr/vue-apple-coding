<template>
    <div>
        <div v-if="activeTab === 'cont1'">소개</div>
        <div v-else-if="activeTab === 'cont2'">상세</div>
        <div v-else>리뷰</div>
    </div>
</template>

<script setup>
const props = defineProps({
    activeTab: String
})
</script>

<style lang="scss" scoped>

</style>