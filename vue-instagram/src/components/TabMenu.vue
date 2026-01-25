<script setup>
    const props = defineProps({
        modelValue: String,
    });
    const emits = defineEmits(['update:modelValue']);

    const tabs = [
        { label: '탭1', value: 'cont1'},
        { label: '탭2', value: 'cont2'},
        { label: '탭3', value: 'cont3'},
    ]
</script>

<template>
    <div class="tabs">
        <button
            v-for="tab in tabs"
            :key="tab.value"
            :class="{active: modelValue === tab.value}"
            @click="emits('update:modelValue', tab.value);"
        >{{ tab.label }}</button>
    </div>
</template>

<style lang="scss" scoped>
button{
    color:#000;
    background:#fff;
    border:1px solid #888;

    &.active{
        background:#000;
        color:#fff;
    }
}
</style>