<template>
    <main>
        <div v-if="store.step === 0"
            class="main-tab">
            <Post
                v-for="(item, idx) in store.post"
                :key="idx"
                :item="item"
                :idx="idx"
            />
            
            <button @click="store.more">더보기</button>
        </div>

        <div
            v-if="store.step === 1" class="main-tab">
            <!-- 필터선택페이지 -->
            <div class="upload-image"
                :style="{backgroundImage: `url(${store.uploadImage})`}"></div>
            <div class="filters">
                <div class="filter-1"></div>
                <div class="filter-1"></div>
                <div class="filter-1"></div>
                <div class="filter-1"></div>
                <div class="filter-1"></div>
            </div>
        </div>

        <div
            v-if="store.step === 2"
            class="main-tab">
            <!-- 글작성페이지 -->
            <div class="upload-image"
                :style="{backgroundImage: `url(${store.uploadImage})`}"></div>
            <div class="write">
                <textarea class="write-box">write!</textarea>
            </div>
        </div>
    </main>

</template>

<script setup>
    import Post from './Post.vue';
    import { usePostStore } from '../store/store';
    const store = usePostStore();

</script>

<style lang="scss" scoped>
.upload-image{
    width: 100%;
    height: 450px;
    background: cornflowerblue;
    background-size:contain;
    background-repeat:no-repeat;
    background-position:center;
}
.filters{
    overflow-x:scroll;
    white-space: nowrap;
}
.filter-1 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color : white;
    background-size: cover;
}
.filters::-webkit-scrollbar {
    height: 5px;
}
.filters::-webkit-scrollbar-track {
    background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
    background: #555; 
}
.write-box {
    border: none;
    width: 90%;
    height: 100px;
    padding: 15px;
    margin: auto;
    display: block;
    outline: none;
}
</style>

