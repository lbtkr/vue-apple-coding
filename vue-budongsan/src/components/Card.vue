<script setup>
    const props = defineProps({
        prdItem: Object,
    });
    const emit = defineEmits(['select']);
</script>

<template>
    <div class="row item-box"
        @click="$emit('select', prdItem.id)">
        <div class="col-sm-6">
            <img :src="`${prdItem.image}`"
                 :alt="`${prdItem.title} 사진`">
        </div>
        <div class="col-sm-6">
            <h4>{{ prdItem.title }}</h4>
            <p>월 {{ prdItem.price.toLocaleString() }}원</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
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
</style>