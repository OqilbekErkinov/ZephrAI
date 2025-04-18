<template>
    <div class="style-wrapper">
        <h1 class="style-heading"><span class="highlight">Выбирайте</span><br><span
                style="font-family: Futura PT, sans-serif">готовый стиль</span></h1>
        <div class="style-grid">
            <NuxtLink :to="{ path: '/styles-type', query: { category: style.title } }" class="style-card"
                v-for="(style, i) in styles" :key="i" :style="{ backgroundImage: `url(${style.img})` }"
                style="text-decoration: none;">
                <div>
                    <p class="style-title">{{ style.title }}</p>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
<script setup>
const styles = [
    { title: 'Портретная съёмка', img: '/images/category1.png', link: 'http://localhost:3000/styles-type/' },
    { title: 'Fashion', img: '/images/category2.png' },
    { title: 'Креатив', img: '/images/category3.png' },
    { title: 'Национальный', img: '/images/category4.png' },
    { title: 'Природа', img: '/images/category5.png' },
    { title: 'Богатство', img: '/images/category6.png' },
    { title: 'Праздники', img: '/images/category7.png' },
    { title: 'Отпуск', img: '/images/category8.png' },
    { title: 'Спорт', img: '/images/category9.png' },
    { title: 'Фильмы', img: '/images/category10.png' }
]
</script>