<template>
    <div class="discount text-bg-dark p-3">
        <p class="text">지금 결제하면 {{ props.rate }}% 할인</p>
        <button
            type="button"
            @click="emit('hideDscntBox')"
            @load="emit('decrease')"
        >❌</button>
    </div>
</template>

<script setup>
    import { onMounted, onUnmounted } from 'vue';
    const props = defineProps({
        rate: Number
    });

    const emit = defineEmits(['updateRate', 'hideDscntBox']);
    let decreaseRate;
    
    onMounted(() => {
        decreaseRate = setInterval(() => {
            if(props.rate < 1){
                emit('updateRate', 0);
                emit('hideDscntBox');
                clearInterval(decreaseRate);
                return;
            }
            emit('updateRate', props.rate - 1);
        }, 1000);
    });

    onUnmounted(() => {
        // 컴포넌트가 화면에서 사라지면 setInterval 반복 타이머 제거
        clearInterval(decreaseRate);
    });


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