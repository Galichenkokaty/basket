<template>
    <div class="breadcrums">
        <ul class="breadcrums__list">
            <li class="breadcrums__item">
                <NuxtLink to="#" class="breadcrums__link">Главная</NuxtLink>
            </li>
            <li class="breadcrums__item">
                <span class="breadcrums__link">Корзина</span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import '~/components/breadcrumbs/__breadcrumbs.css'
</script>