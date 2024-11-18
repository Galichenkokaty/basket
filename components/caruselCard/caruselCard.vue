<template>
    <div 
		class="carusel-card__wrap grid"
	>
		<div class="carusel-card__head flex --just-space --align-center">
			<h2 class="carusel-card__title">Просмотренные товары</h2>
			<div class="swiper_nav flex --align-center">
				<div class="swiper-button-prev"></div>
				<div class="swiper-pagination"></div>
				<div class="swiper-button-next"></div>
			</div>
		</div>
        <Swiper
			:modules="swiperModules"
			:pagination="swiperPagination"
			:navigation="swiperNavigation"
			:breakpoints="swiperProperties"
			@swiper="swiper"
			class="carusel-card"
		>
            <SwiperSlide
				v-for="card in cards"
				class="carusel-card__slide"
			>
			<div class="carusel-card__content flex --direction-column --just-space">
				<div class="carusel-card__info flex --direction-column --just-space"">
					<div class="carusel-card__thumb thumb">
						<NuxtPicture class="carusel-card__img" :src="card.image" />
					</div>
					<div class="carusel-card__text grid">
						<h3 class="carusel-card__info_title">{{ card.mini_title }}</h3>
						<p class="carusel-card__info_desc">{{ card.text }}</p>
					</div>
				</div>
				<div class="carusel-card__info flex --direction-column --just-space">
					<div class="carusel-card__botton grid">
						<div class="carusel-card__price grid">
							<span class="carusel-card__price_ru">{{ card.range_price.ru }}</span>
							<span class="carusel-card__price_eu">{{card.range_price.eu}}</span>
						</div>
						<button class="carusel-card__btn">
							Подробнее
						</button>
					</div>
				</div>
			</div>
			</SwiperSlide>
        </Swiper>
    </div>
</template>


<script setup lang="ts">
    import '~/components/caruselCard/__caruselCard.css'
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Autoplay, Pagination } from 'swiper/modules';
    import 'swiper/css/bundle';
    import type { NavigationOptions, PaginationOptions } from 'swiper/types';
	import cards from '~/assets/cards.json'
    

    const swiperPagination = ref<PaginationOptions>(
        {
			el: '.swiper-pagination',
			type: 'fraction'
		}
    );

    const swiperNavigation = ref<NavigationOptions>({
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next'
	});

	const swiperProperties = ref(
		{
			1920: {
				spaceBetween: 20,
				slidesPerView: 5
			},
			1440: {
				spaceBetween: 16,
				slidesPerView: 4
			},
			768: {
				spaceBetween: 12,
				slidesPerView: 2.5
			},
			320: {
				spaceBetween: 12,
				slidesPerView: 1.5
			}
		}
	);

	const swiperModules = [Navigation, Autoplay, Pagination];

	const swiper = (swiper) => {
		swiper.value = swiper;
	};

</script>