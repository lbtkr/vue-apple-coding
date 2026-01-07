<template>
    <Navigation />
    <DiscountEvent v-if="!store.isDiscountBoxHide"/>

    <div class="container">
        <Card v-for="item in store.productArr"
              :key="item.id"                
              :prdItem="item"
              @select="store.modalControl"
        />
    </div>

    <!--------------------------------------------------------------
        * store.selectedProduct가 null일 수 있기 때문에
        * && store.selectedProduct 를 붙여서 안전하게 랜더링

        * :stayMonth="store.modalItem.stayMonth"
          @update:stayMonth="store.modalItem.stayMonth = $event"
            을 생략해서
          v-model:stayMonth="store.modalItem.stayMonth" 로 선언
    --------------------------------------------------------------->
    <Modal  v-if="store.modalItem.open && store.selectedProduct"
            :product="store.selectedProduct"
            v-model:stayMonth="store.modalItem.stayMonth"
            @close="store.modalControl()"
    />
    
</template>

<script setup>
    import DiscountEvent from './components/discountEvent.vue';
    import Navigation from './components/Navigation.vue';
    import Card from './components/Card.vue';
    import Modal from './components/Modal.vue';
    
    import { useProductStore } from './store/store';
    const store = useProductStore();
</script>

<style scoped lang="scss">
    .container{
        padding:20px 0;
    }
</style>