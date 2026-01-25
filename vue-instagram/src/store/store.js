import { defineStore } from 'pinia';
import axios from 'axios';
import postData from '/src/assets/post-data.js';

export const usePostStore = defineStore('post', {
    state: () => ({
        post: postData,
        step: 0,
        uploadImage: '',
    }),
    actions: {
        toggleLike(idx) {
            const post = this.post[idx];
            console.log(idx);
            console.log('this === ', this.post[idx]);
            if (!post) return

            post.liked = !post.liked
            post.likes += post.liked ? 1 : -1
        },
        more(){
            axios.get('https://codingapple1.github.io/vue/more0.json')
            .then((data) => {
                console.log(data.data);
                this.post.push(data.data)
            })
            .catch((err) => {
                console.log(err);
            });
        },
        upload(e){
            let file = e.target.files;
            let url = URL.createObjectURL(file[0]);
            this.step = 1;
            this.uploadImage = url;
        },
        publish(){
            var myPost = {};
            this.post.unshift(myPost);
            this.step = 0;
        },
    }
});