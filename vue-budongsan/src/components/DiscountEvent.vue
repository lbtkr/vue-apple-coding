<template>
    <div class="discount text-bg-dark p-3">
        <p class="text">지금 결제하면 20% 할인</p>
        <button
            type="button"
            @click="emit('hideDscntBox')">❌</button>
    </div>
</template>

<script setup>
const emit = defineEmits(['hideDscntBox']);
</script>

<style lang="scss" scoped>
.discount{
    display:flex;
    align-items:center;
    justify-content:space-between;
    .text{
        margin:0;
        font-weight:600;
        font-size:16px;
    }
    button{
        background:transparent;
        border:none;
    }
}
</style>