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
        justify-content:flex-start;
        cursor:pointer;
        & +.item-box{
            margin-top:20px;
            padding-top:20px;
            border-top:1px solid #e1e1e1; 
        }
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