<script setup>
    import { useProductStore } from './../store/store';
    const store = useProductStore();
</script>

<template>
    <div class="container shop-container">
        <div class="row item-box"
            v-for="item in store.productArr" :key="item.id"
            @click="store.modalControl(item.id)">
            <div class="col-sm-6">
                <img :src="`${item.image}`" :alt="`${item.title} 사진`">
            </div>
            <div class="col-sm-6">
                <h4>{{ item.title }}</h4>
                <p>월 {{ item.price.toLocaleString() }}원</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.shop-container{
    padding:20px 0;
    .item-box {
        margin-bottom:20px;
        justify-content:flex-start;
        cursor:pointer;
        .col-sm-6 {
            text-align:left;
            img {
                width:100%;
            }
            h4{
                margin-top:10px;
                font-size:20px;
            }
        }
    }
}
</style>