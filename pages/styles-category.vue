<template>
    <div class="style-wrapper">
        <h1 class="style-heading"><span class="highlight">Выбирайте</span><br><span
                style="font-family: Futura PT, sans-serif">готовый стиль</span></h1>
        <div class="style-grid">
            <NuxtLink :to="{ path: '/styles-type', query: { category: style.title } }"  class="style-card" v-for="(style, i) in styles" :key="i"
                :style="{ backgroundImage: `url(${style.img})` }" style="text-decoration: none;">
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

<style scoped>
.style-wrapper {
    background: #131313;
    padding: 14px;
    max-width: 450px;
    margin: 0 auto;
}

.style-heading {
    font-weight: bold;
    color: #fff;
    margin-bottom: 1rem;
    line-height: 1.2;
    letter-spacing: 1.2px;
    ;
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
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
    height: 180px;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: end;
}


.style-title {
  color: white;
  font-size: 14px;
  padding: 5px 0.2rem;
  background: rgba(25, 25, 25, 0.65);
  backdrop-filter: blur(10px);
  width: 100%;
  margin-top: auto;
  text-align: center;
  border-radius: none;
  overflow: hidden;
  margin: 0;
}
</style>