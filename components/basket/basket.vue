<template>
    <div class="basket grid">
        <div class="basket__header flex --just-space --align-end">
            <div class="basket__header_info flex --align-end">
                <h1 class="basket__header_title">Ваша корзина</h1>
                <p class="basket__header_count">{{ countCards }} товара</p>
            </div>
            <button
                class="basket__header_btn"
                @click="basketCards = []"
            >
                Очистить корзину
            </button>
        </div>
        <div class="basket__content grid">
            <div class="basket__content_cards grid">
                <div 
                    v-if="!basketCards.length"
                    class="basket__content_empty"
                >
                    В корзине пока пусто
                </div>
                <CardsCard
                    v-for="(card, index) in basketCards"
                    :key="card.id"
                    v-model:basketCards="basketCards"
                    v-model:card="basketCards[index]"
                />
                <div 
                    v-if="basketCards.length"
                    class="basket_install flex --align-center">
                    <label>
                        <input class="" type="checkbox"  @click="install = !install"/>
                        <span id="install" class="custom-checkbox basket_install_checkbox" ></span>
                    </label>
                    <div class="basket_install_content flex --align-center">
                        <div class="basket_install_content-icon" >
                            <div class="basket_install_content-thumb thumb">
                                <NuxtIcon name="install" filled/>
                            </div>
                        </div>
                        <div class="basket_install_content-text flex --direction-column">
                            <p class="basket_install_content-title">Установка</p>
                            <p class="basket_install_content-text">Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</p>
                        </div>
                    </div>
                </div>
            </div>
            <BasketRigthPanel
                :basketCards="basketCards"
                :install="install"
            />
        </div>
        <CaruselCard/>
    </div>
</template>

<script lang="ts" setup>
    import '~/components/basket/__basket.css'
    import { useBasketStore } from '@/stores/basket'

    const store = useBasketStore()
    const { basketCards } = storeToRefs(store);

    const install = ref(false);

    const countCards = computed(() => {
        const defaultCountCard = ref(0)
        basketCards.value.forEach(item => defaultCountCard.value = defaultCountCard.value + item.count)
        return defaultCountCard
    })

</script>