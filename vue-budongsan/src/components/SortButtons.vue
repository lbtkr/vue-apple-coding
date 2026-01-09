<template>
    <div class="btn-group sort-btns" role="group" aria-label="sort btns">
        <button
            type="button"
            class="btn btn-outline-secondary"
            v-for="opt in options"
            :key="opt.key"
            @click="emitSorts(opt)"
        >
            {{ opt.label }}
        </button>
        <button type="button" class="btn btn-outline-secondary" @click="$emit('reset')">초기화</button>
    </div>
</template>

<script setup>
    const props = defineProps({
        options: Array,
    });
    const emit = defineEmits(['sort', 'reset']);

    const emitSorts = (opt) => {
        console.log("opt ======= ", opt);
        emit('sort', {key: opt.key, dir: opt.dir, type: opt.type, locale: opt.locale})
    }
</script>

<style lang="scss" scoped>
    .sort-btns{
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