import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
    // 상태변수(initial state)
    state: () => ({
        productArr : [
            { id: 0, name: '역삼동 원룸', price: 80, count: 0 },
            { id: 1, name: '신림동 원룸', price: 85, count: 0 },
            { id: 2, name: '강남동 원룸', price: 90, count: 0 },
        ],
        modalItem: {
            open: false,
        }
    }),
    actions: {
        increaseCount(id){
            const product = this.productArr.find( item => item.id === id );
            if(!product) return;

            product.count++;
        },
        modalControl(){
            this.modalItem.open = !this.modalItem.open;
        },
    },
    // vuex의 mutation 사라짐
});