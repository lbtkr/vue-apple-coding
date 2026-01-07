import { defineStore } from 'pinia';
import roomData from '/src/assets/room-data.js';

export const useProductStore = defineStore('product', {
    // 상태변수(initial state)
    state: () => ({
        productArr : roomData,
        modalItem: {
            open: false,
        },
        selectedProduct: null
    }),
    actions: {
        // increaseCount(id){
        //     const product = this.productArr.find( item => item.id === id );
        //     if(!product) return;

        //     product.count++;
        // },
        modalControl(id){
            this.modalItem.open = !this.modalItem.open;
            this.selectedProduct = this.productArr.find(item => item.id === id);
        },
    },
    // vuex의 mutation 사라짐
});