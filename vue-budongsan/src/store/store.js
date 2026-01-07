import { defineStore } from 'pinia';
import roomData from '/src/assets/room-data.js';

export const useProductStore = defineStore('product', {
    state: () => ({
        productArr : roomData,
        modalItem: {
            open: false,
            stayMonth: 1,
        },
        selectedProduct: null,
        isDiscountBoxHide: false,
    }),
    actions: {
        modalControl(id){
            this.modalItem.open = !this.modalItem.open;
            this.selectedProduct = this.productArr.find(item => item.id === id);
        },
        hideDiscountBox(){
            this.isDiscountBoxHide = !this.isDiscountBoxHide;
        }
    },
    // vuex의 mutation 사라짐
});