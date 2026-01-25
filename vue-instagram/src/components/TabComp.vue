<template>
    <section>
        <TabMenu
            v-model="activeTab"/>
        <TabContent
            :activeTab="activeTab"/>

    </section>
</template>

<script setup>
import { ref } from 'vue';
import TabMenu from './TabMenu.vue';
import TabContent from './TabContent.vue';

const activeTab = ref('cont1'); // ref를 쓰는 이유는 값이 바뀌면 화면이 자동으로 그려지게

</script>

<style lang="scss" scoped>

</style>