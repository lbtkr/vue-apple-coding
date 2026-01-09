<template>
    <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-secondary" @click="store.priceAscSorts()">가격순 정렬</button>
        <button type="button" class="btn btn-outline-secondary" @click="store.priceDesSort()">가격순 정렬</button>
        <button type="button" class="btn btn-outline-secondary" @click="store.nameAscSorts()">이름순 정렬</button>
        <button type="button" class="btn btn-outline-secondary" @click="store.sortBack()">되돌리기</button>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .btn-group{
        --bs-gutter-x: 1.5rem;
        justify-content:flex-end;
        width:100%;
        margin-bottom:8px;
        padding:var(--bs-gutter-x) calc(var(--bs-gutter-x) * 0.5) 0;
        button{
            flex:0 1 auto;
        }
    }
</style>