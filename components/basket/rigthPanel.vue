<template>
    <div class="summary-panel grid">
        <p class="summary-panel__title">Итого</p>
        <div class="summary-panel__content grid">
            <div class="summary-panel__content-items grid">
                <div 
                    v-for="item in basketResultObj.body"
                    class="summary-panel__content-item flex --just-space"
                >
                    <p class="summary-panel__content-title">{{ item.title }}</p>
                    <p class="summary-panel__content-info">{{ item.value }}</p>
                </div>
            </div>
            <div class="summary-panel__content-result flex --just-space --align-end">
                <p class="summary-panel__content-title">{{ basketResultObj.price_all.title }}</p>
                <p class="summary-panel__content-info">{{ basketResultObj.price_all.value }} <span>₽</span></p>
            </div>
        </div>
        <button class="summary-panel__btn">
            Оформить заказ
        </button>
        <button 
            class="summary-panel__btn --one-click"
            @click="postBasketDats"
        >
            Купить в 1 клик
        </button>
    </div>
</template>

<script setup lang="ts">
    import '~/components/basket/__basket.css'
    import type { IBasketCard } from '~/types';

    const props = defineProps<{
        basketCards: IBasketCard[]
        install: boolean
    }>()

    const defaultBasketResultObj = {
        body:{
            order_amount: {
                title: 'Сумма заказа',
                value: '0'
            },
            count: {
                title: 'Количество',
                value: '0'
            },
            install: {
                title: 'Установка',
                value: 'Нет'
            },
        },
        price_all: {
            title: 'Стоимость товаров',
            value: '0'
        }
    }

    const basketResultObj = computed(() => {
        const result = {...defaultBasketResultObj}
        const count = ref(0)
        const order_amount = ref(0)

        props.basketCards.forEach(item => count.value = count.value + item.count)
        props.basketCards.forEach(item => order_amount.value = order_amount.value + item.count*item.price)

        result.body.count.value = count.value.toLocaleString() + ' шт'
        result.body.order_amount.value = order_amount.value.toLocaleString() + ' ₽'
        result.body.install.value = props.install ? 'Да' : 'Нет'
        result.price_all.value = order_amount.value.toLocaleString()

        return result
    })

    async function postBasketDats( ){
        await $fetch( '/api/...', {
            method: 'POST',
            body: props.basketCards
        } );
    }
    
</script>