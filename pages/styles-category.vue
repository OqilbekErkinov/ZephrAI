<template>
    <div class="style-wrapper">
        <h2 class="style-heading"><span class="highlight">Выбирайте</span><br>готовый стиль</h2>
        <div class="style-grid">
            <div class="style-card" v-for="(style, i) in styles" :key="i">
                <img :src="style.img" :alt="style.title" class="style-img" />
                <NuxtLink :to="{ path: '/styles-type', query: { category: style.title } }">
                    <p class="style-title">{{ style.title }}</p>
                </NuxtLink>
            </div>
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

<style scoped>
.style-wrapper {
    background: #131313;
    padding: 1.5rem 1rem;
    max-width: 400px;
    margin: 0 auto;
    font-family: sans-serif;
}

.style-heading {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 1rem;
    line-height: 1.2;
}

.highlight {
    color: #F0A8E1;
}

.style-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 2rem;
}

.style-card {
    background: rgba(25, 25, 25, 0.8);
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
}

.style-img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    display: block;
}

.style-title {
    color: white;
    font-size: 10px;
    padding: 2px 0.2rem;
    position: absolute;
    background: rgba(25, 25, 25, 0.8);
    width: 43%;
    margin-top: -1.1rem;
    text-align: center;
    border-radius: 0 0 10px 10px;
}
</style>