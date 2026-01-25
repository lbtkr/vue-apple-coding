import { defineStore } from 'pinia';
import axios from 'axios';
import postData from '/src/assets/post-data.js';

export const usePostStore = defineStore('post', {
    state: () => ({
        post: postData,
        step: 0,
        uploadImage: '',
        uploadContent: '',
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
            let file = e.target?.files?.[0];
            if (!file) return

            // 이미지 아닌 파일 거르기 (선택)
            if (!file.type.startsWith('image/')) return

            let url = URL.createObjectURL(file);
            this.step = 1;
            this.uploadImage = url;
        },
        publish(){
            console.log(this.uploadContent);
            var myPost = {
                id: 100,
                name: "Sample",
                userImage: "https://picsum.photos/100?random=3",
                postImage: this.uploadImage,
                likes: 50,
                date: "May 15",
                liked: false,
                content: this.uploadContent,
                filter: "perpetua"
            };
            this.post.unshift(myPost);
            this.step = 0;
        },
    }
});