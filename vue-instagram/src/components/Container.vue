<template>
    <div>
        <Post
            v-for="(item, idx) in postStore.post"
            :key="idx"
            :item="item"
            :idx="idx"
        />
    </div>
</template>

<script setup>
import Post from './Post.vue';
import { usePostStore } from '../store/store';

const postStore = usePostStore();

</script>

<style lang="scss" scoped>

</style>