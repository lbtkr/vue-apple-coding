import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
    // 상태변수(initial state)
    state: () => ({
        productArr : [
            { id: 1, name: '역삼동 원룸', price: 80, count: 0 },
            { id: 2, name: '신림동 원룸', price: 85, count: 0 },
            { id: 3, name: '강남동 원룸', price: 90, count: 0 },
        ],
    }),
    actions: {
        increaseCount(id){
            const product = this.productArr.find( item => item.id === id );
            if(!product) return;
            
            product.count++;
        }
    },
    // vuex의 mutation 사라짐
});