import { defineStore } from 'pinia';
import postData from '/src/assets/post-data.js';

export const usePostStore = defineStore('post', {
    state: () => ({
        post: postData,
    }),
    actions: {
    toggleLike(id) {
        const post = this.post.find(p => p.id === id)
        post.liked = !post.liked
        post.likes += post.liked ? 1 : -1
    },
}
});