<script setup>
    import { useProductStore } from './../store/store';
    const store = useProductStore();
</script>

<template>
    <div class="item-box"
        v-for="item in store.productArr" :key="item.id"
        @click="store.modalControl()"
    >
        <img :src="`${item.image}`" :alt="`${item.title} 사진`">
        <h4>{{ item.title }}</h4>
        <p>{{ item.price }} 원</p>
        <p class="desc">{{ item.content }}</p>
        <button @click="store.increaseCount(item.id)">허위매물신고 <span>신고수 : {{ item.count }}</span></button>
    </div>
</template>

<style lang="scss" scoped>
.item-box {
    cursor:pointer;
    img {
        width:100%;
        margin-top:40px;
    }
}
</style>