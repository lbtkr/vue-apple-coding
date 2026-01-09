import { defineStore } from 'pinia';
import roomData from '/src/assets/room-data.js';

export const useProductStore = defineStore('product', {
    state: () => ({
        productArr : roomData,
        productOriginArr : [...roomData],
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
        },
        /**
         # 정렬 함수
         * priceAscSorts()  | 가격 정렬
         * priceDesSorts()  | 가격 역순 정렬
         * nameAscSorts()   | 상품명 가나다 정렬
         * sortBack()       | 정렬 복구
         */
        priceAscSorts(){
            this.productArr.sort(function(a, b){
                return a.price - b.price;
            });
        },
        priceDesSort(){
            this.productArr.sort(function(a, b){
                return b.price - a.price;
            });
        },
        nameAscSorts(){
            this.productArr.sort(function(a, b){
                return a.title.localeCompare(b.title);;
            });
        },
        sortBack(){
            this.productArr = [...this.productOriginArr];
        }   
    },
    // vuex의 mutation 사라짐
});