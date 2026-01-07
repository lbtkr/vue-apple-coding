<template>
    <div class="modal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">매물 상세</h5>
                    <button type="button"
                            class="btn-close"
                            @click="store.modalControl()"
                            data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h4>{{ store.selectedProduct.title}}</h4>
                    <figure class="figure prd-img">
                        <img
                            class="figure-img img-fluid rounded"
                            :src="store.selectedProduct.image" :alt="`${store.selectedProduct.title} 사진`">
                        <figcaption class="figure-caption">{{ store.selectedProduct.title }} photo</figcaption>
                    </figure>
                    <p class="desc">{{ store.selectedProduct.content }}</p>
                </div>
            </div>
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
    background:rgba(0,0,0,0.5);
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
        text-align:left;
    }
}
</style>