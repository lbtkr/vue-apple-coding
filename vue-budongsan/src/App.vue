<template>
    <Navigation />
    <DiscountEvent
        v-if="!store.isDiscountBoxHide"
        @hideDscntBox="store.hideDiscountBox"
    />

    <SortButtons
        :options="[
            { key: 'price', dir: 'asc', type: 'number', label: '가격 낮은순',},
            { key: 'price', dir: 'desc', type: 'number', label: '가격 높은순',},
            { key: 'title', dir: 'asc', type: 'string', label: '상품명순',},
        ]"
        @sort="store.setSort"
        @reset="store.clearSort"
    />

    <div class="container">
        <Card v-for="item in store.productArr"
              :key="item.id"                
              :prdItem="item"
              @select="store.openModal"
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
    <Transition name="fade" class="start" :class="{end : store.modalItem.open}">
        <Modal  v-if="store.modalItem.open && store.selectedProduct"
                :product="store.selectedProduct"
                v-model:stayMonth="store.modalItem.stayMonth"
                @close="store.closeModal()"
        />
    </Transition>
    
</template>

<script setup>
    import DiscountEvent from './components/discountEvent.vue';
    import SortButtons from './components/SortButtons.vue';
    import Navigation from './components/Navigation.vue';
    import Card from './components/Card.vue';
    import Modal from './components/Modal.vue';
    
    import { useProductStore } from './store/store';
    import { Transition } from 'vue';
    const store = useProductStore();
</script>

<style scoped lang="scss">
    .container{
        padding:20px 0 60px;
    }

    /*  
        .작명.enter-from    | 시작 시 스타일
        .작명-enter-active  | 애니메이션 동작 중 상태, 대부분 transition 이런거
        .작명-enter-to      | 끝날 시 스타일
        .작명.leave-from    | 시작 시 스타일
        .작명-leave-active  | 애니메이션 동작 중 상태, 대부분 transition 이런거
        .작명-leave-to      | 끝날 시 스타일
    */
    .fade-enter-from{
        opacity:0;
    }
    .fade-enter-active{
        transition:all 1s;
    }
    .fade-enter-to{
        opacity:1;
    }
    .fade-leave-from{
        opacity:1;
    }
    .fade-leave-active{
        transition:all 1s;
    }
    .fade-leave-to{
        opacity:0;
    }
    
</style>