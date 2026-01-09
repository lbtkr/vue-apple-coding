import { defineStore } from 'pinia';
import roomData from '/src/assets/room-data.js';

export const useProductStore = defineStore('product', {
    state: () => ({
        modalItem: {
            open: false,
            stayMonth: 1,
        },
        isDiscountBoxHide: false,
        selectedProduct: null,

        // 상품정렬
        productOriginArr: roomData,
        sortKey: null,
        sortDir: 'asc',
        sortType: null,
        sortLocale: 'ko',
    }),
    getters: {
        productArr(state){
            const arr = [...this.productOriginArr];
            if(!this.sortKey) return arr;

            /** 숫자정렬 */
            if(state.sortType == 'number'){
                arr.sort((a,b) => state.sortDir == 'asc'
                    ? a[state.sortKey] - b[state.sortKey]
                    : b[state.sortKey] - a[state.sortKey]
                );
            }
            /** 문자정렬 */
            if(state.sortType == 'string'){
                arr.sort((a,b) => state.sortDir === 'asc'
                    ? String(a[state.sortKey]).localeCompare(String(b[state.sortKey]), state.sortLocale)
                    : String(b[state.sortKey]).localeCompare(String(a[state.sortKey]), state.sortLocale)
                );
            }
            return arr;
        }
    },
    actions: {
        openModal(id){
            this.modalItem.open = true;
            this.selectedProduct = this.productArr.find(item => item.id === id);
        },
        closeModal(){
            this.modalItem.open = false;
            this.selectedProduct = null;
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
        setSort({key, dir, type, locale}){
            this.sortKey    = key;
            this.sortDir    = dir;
            this.sortType   = type;
            this.sortLocale = locale;
        },
        clearSort(){
            this.sortKey    = null;
            this.sortDir    = 'asc';
            this.sortType   = null;
            this.sortLocale = 'ko';
        },
    },
    // vuex의 mutation 사라짐
});