<template>
  <div class="type-wrapper">
    <h2 class="type-heading"><span class="highlight">Выбирайте</span><br>готовый стиль</h2>
    <div class="type-back">
      <div class="d-flex align-items-center justify-content-between">
        <h3>{{ route.query.category || 'Категория' }}</h3>
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
  { title: 'Летнее сияние', img: '/images/type6.png' }
]
</script>

<style scoped>
.type-wrapper {
  background: #131313;
  max-width: 400px;
  margin: 0 auto;
  font-family: sans-serif;
}

.type-heading {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  line-height: 1.2;
  margin: 1.5rem 1rem;
}

.highlight {
  color: #F0A8E1;
}

.type-back {
  background: url('/images/typeback.png') no-repeat center;
  background-size: cover;
  width: 100%;
  padding: 0.5rem 1rem 1.5rem 1rem;
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
  height: 150px;
  object-fit: cover;
  display: block;
}

.type-title {
  color: white;
  font-size: 10px;
  padding: 2px 0.2rem;
  position: absolute;
  background: rgba(25, 25, 25, 0.8);
  width: 44%;
  margin-top: -1.1rem;
  text-align: center;
  border-radius: 0 0 10px 10px;
}

.cancel {
  font-size: 20px;
  color: white;
  cursor: pointer;
}
</style>
