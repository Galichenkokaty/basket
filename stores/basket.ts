import { defineStore } from 'pinia'
import cards from '~/assets/cards.json'
import type { IBasketCard } from '~/types'

export const useBasketStore = defineStore('basket', () => {
    const basketCards = ref<IBasketCard[]>([...cards.slice(0,3)])

    return { basketCards }
})