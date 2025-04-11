<template>
  <div class="type-wrapper">
    <h1 class="type-heading"><span class="highlight">Выбирайте</span><br>готовый стиль</h1>
    <div class="type-back">
      <div class="d-flex align-items-center justify-content-between">
        <h4>{{ route.query.category || 'Категория' }}</h4>
        <p class="cancel" @click="goBack">✕</p>
      </div>
      <div class="type-grid">
        <div class="type-card" v-for="(type, i) in types" :key="i">
          <img :src="type.img" :alt="type.title" class="type-img" />
          <NuxtLink :to="{ path: '/styles-pro', query: { type: type.title } }">
            <p class="type-title">{{ type.title }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="gradient-overlay top">
      <img src="/images/menushadow2.png" alt="">
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const goBack = () => {
  router.push('/styles-category')
}

const types = [
  { title: 'Туман', img: '/images/type1.png' },
  { title: 'Очки будущего', img: '/images/type2.png' },
  { title: 'Футуристическое', img: '/images/type3.png' },
  { title: 'Зимняя роскошь', img: '/images/type4.png' },
  { title: 'Желтый луг', img: '/images/type5.png' },
  { title: 'Бургунди', img: '/images/type6.png' },
  { title: 'Летнее сияние', img: '/images/type7.png' }
]
</script>

<style scoped>
.type-wrapper {
  background: #131313;
  max-width: 450px;
  margin: 0 auto;
}

.type-heading {
  font-weight: bold;
  color: #fff;
  line-height: 1.2;
  letter-spacing: 1.2px;
  margin: 14px;
}

.highlight {
  color: #F0A8E1;
}

.type-back {
  background: url('/images/typeback.png') no-repeat center;
  background-size: cover;
  width: 100%;
  height: 150%;
  border-radius: 10px;
  padding: 14px;
  /* margin-bottom: 10rem; */
}

.type-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.type-card {
  background: rgba(25, 25, 25, 0.8);
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
}

.type-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.type-title {
  color: white;
  font-size: 10px;
  padding: 2px 0.2rem;
  position: absolute;
  background: rgba(25, 25, 25, 0.8);
  width: 45%;
  margin-top: -1.1rem;
  text-align: center;
  border-radius: 0 0 10px 10px;
}

.type-back h4 {
  font-size: 20px;
  color: white;
}

.cancel {
  font-size: 20px;
  color: white;
  cursor: pointer;
}

.gradient-overlay {
    position: absolute;
    left: 0;
    right: 0;
    height: 60px;
    z-index: 4050;
    pointer-events: none;
    width: 100%;
    color: #070707 !important;
    background-color: #070707 !important;
  }
  .gradient-overlay.top {
    background: linear-gradient(to bottom, rgba(7, 7, 7, 1), transparent);
  }
</style>
