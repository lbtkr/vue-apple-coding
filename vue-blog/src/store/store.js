import { defineStore } from 'pinia'
import blogData from '/src/assets/blog'


export const useProductStore = defineStore('product', {
    state: () => ({
        blogData : blogData,
    }),
    actions: {

    },
})