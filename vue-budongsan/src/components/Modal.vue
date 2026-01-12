<template>
    <div class="modal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ product.title}}</h5>
                    <button type="button"
                            class="btn-close"
                            @click="emit('close')"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            :title="`${product.title} 모달창 닫기`">
                    </button>
                </div>
                <div class="modal-body">
                    <figure class="figure prd-img">
                        <img
                            class="figure-img img-fluid rounded"
                            :src="product.image"
                            :alt="`${product.title} 사진`">
                        <figcaption class="figure-caption">{{ product.title }} photo</figcaption>
                    </figure>
                    <p class="desc">{{ product.content }}</p>
                    <div class="wrap">
                        <form action="">
                            <span>계약 기간&nbsp;:&nbsp;</span>
                            <input  type="text"
                                    maxlength="3"
                                    :value="stayMonth"
                                    @input="emitStayMonth($event)"
                            >
                            <span>개월</span>
                        </form>
                        <p><span>{{ totalPrice }}</span>원</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed, onUpdated } from 'vue';

    const props = defineProps({
        product: Object,
        stayMonth: Number,
    });
    const emit = defineEmits(['close', 'update:stayMonth']);

    // 숫자만 입력 가능하도록
    const emitStayMonth = (e) => {
        // input 값은 문자열이므로 Number 변환 + 빈 값 방어
        // const month = Number(e.target.value || 0);
        const raw = e.target.value ?? '';
        if(!/^\d*$/.test(raw)){
            console.log('숫자아님');
            const cleaned = raw.replace(/\D/g, '');
            emit('update:stayMonth', cleaned);
            return;
        }

        emit('update:stayMonth', raw === '' ? 0 : Number(raw));
    }
    const totalPrice = computed(() => {
        return (props.product.price * (props.stayMonth || 0)).toLocaleString();
    });

    onUpdated(() => {
        if(props.stayMonth === 2){
            alert('2개월 이상만 계약이 가능합니다');
            emit('update:stayMonth', 0);
        }
    });
</script>

<style lang="scss" scoped>
.modal {
    display:flex;
    background:rgba(0,0,0,0.5);
    .modal-header{
        .modal-title {
            padding-left:8px;
        }
    }
    h4 {
        margin-bottom:20px;
        font-size:18px;
        font-weight:600;
        font-family:'Noto Sans KR', sans-serif;
        text-align:left;
    }
    .prd-img{
        width:100%;
        img{
            width:100%;
        };
    }
    .desc{
        margin-bottom:12px;
        // text-align:left;
    }
    .wrap{
        display:flex;
        gap:20px;
        form{
            flex:none;
            display:flex;
            flex-wrap:wrap;
            justify-content:center;
            align-items:end;
            width:50%;
            padding:12px 20px;
            border-radius:5px;
            border:2px solid#ebebeb;
            input{
                display:inline-block;
                width:50px;
                text-align:center;
                background:transparent;
                border:1px solid #999;
                border-width:0 0 1px;
            }
        }
        p {
            width:100%;
            margin:auto 0 0;
            font-size:20px;
            text-align:right;
            span{
                font-size:30px;
                font-weight:bold;
                color:rgb(16, 76, 155)
            }
        }
    }
}
</style>