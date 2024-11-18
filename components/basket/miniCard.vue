<template>
    <div class="mini-card-basket__wrap flex" >
        <div class="mini-card-basket__icon thumb ">
            <NuxtIcon name="basket" filled/>
        </div>
        <div class="mini-card-basket__content grid">
            <p class="mini-card-basket__title">Ваша корзина</p>
            <p class="mini-card-basket__product">{{ countCards }} товара</p>
            <p class="mini-card-basket__price">{{ allPrice }} ₽</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import '~/components/basket/__basket.css'
    import { useBasketStore } from '@/stores/basket'

    const store = useBasketStore()
    const { basketCards } = storeToRefs(store);

    const countCards = computed(() => {
        const defaultCountCard = ref(0)
        basketCards.value.forEach(item => defaultCountCard.value = defaultCountCard.value + item.count)
        return defaultCountCard
    })

    const allPrice = computed(() => {
        const order_amount = ref(0)

        basketCards.value.forEach(item => order_amount.value = order_amount.value + item.count*item.price)

        return order_amount.value.toLocaleString()
    })

</script>