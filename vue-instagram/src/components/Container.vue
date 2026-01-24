<template>
    <div>
        <Post
            v-for="item in postStore.post"
            :key="item.id"
            :item="item"
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