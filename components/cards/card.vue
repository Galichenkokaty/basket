<template>
    <div class="card flex --align-center --just-space">
        <div class="card__content flex">
            <div class="card__thumb thumb">
                <NuxtPicture class="card__img" :src="card.image" />
            </div>
            <div class="card__info flex --direction-column">
                <h3 class="card__info_title">{{ card.title }}</h3>
                <p class="card__info_desc">{{ card.desc }}</p>
                <span class="card__info_article">Артикул: {{ card.article }}</span>
            </div>
        </div>
        <div class="card__count-block grid">
            <div class="card__count flex">
                <button 
                    class="card__count_btn thumb flex --align-center --just-center"
                    :disabled="card.count === 1"
                    @click="--card.count"
                >
                    <div class="card__count_btn-thumb thumb ">
                        <NuxtIcon name="minus" filled/>
                    </div>
                </button>
                <input v-model="card.count" type="number" class="card__count_input ">
                <button 
                    class="card__count_btn thumb flex --align-center --just-center"
                    @click="++card.count"
                >
                    <div class="card__count_btn-thumb thumb">
                        <NuxtIcon name="plus" filled/>
                    </div>
                </button>
            </div>
            <p 
                v-if="card.count > 1"
                class="card__price_min "
            >
                {{ (card.price).toLocaleString() }} ₽/шт
            </p>
        </div>
        <div class="card__price">
            {{ (card.price*card.count).toLocaleString() }} ₽
        </div>
        <button 
            class="card__delete_thumb thumb"
            @click="onTrashCard"
            >
            <NuxtIcon name="cross" filled/>
        </button>
    </div>
</template>

<script lang="ts" setup>
    import '~/components/cards/__cards.css'
    import type { IBasketCard } from '~/types';

    const basketCards = defineModel<IBasketCard[]>('basketCards',{ required: true })
    const card = defineModel<IBasketCard>('card', { required: true })


    const onTrashCard = (() => {
		basketCards.value.splice( basketCards.value.indexOf(card.value) , 1)
	})
</script>