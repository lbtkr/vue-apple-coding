<template>
    <div class="modal black-bg">
        <div class="white-bg">
            <h4>상세페이지</h4>
            <p>상세페이지 내용</p>
            <button @click="store.modalControl()">닫기</button>
        </div>

    </div>
</template>

<script setup>
    import { useProductStore } from './../store/store';

    const store = useProductStore();
</script>

<style lang="scss" scoped>
.modal {
    display:flex;
    justify-content:center;
    align-items:center;
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    width:100%;
    height:100%;
    &.black-bg{
        background:rgba(0,0,0,0.5);
    }
    .white-bg{
        width:80%;
        height:80%;
        padding:20px;
        background:#fff;
        border-radius:8px;
    }
}
</style>