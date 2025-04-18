<template>
  <div class="type-wrapper">
    <h1 class="type-heading"><span class="highlight">Выбирайте</span><br>готовый стиль</h1>
    <div class="type-back">
      <div class="d-flex align-items-center justify-content-between">
        <h4>{{ route.query.category || 'Категория' }}</h4>
        <p class="cancel" @click="goBack">✕</p>
      </div>
      <div class="type-grid">
        <NuxtLink class="type-card" v-for="(type, i) in types" :key="i" :style="{ backgroundImage: `url(${type.img})` }"
          :to="{ path: '/styles-pro', query: { type: type.title } }" style="text-decoration: none;">
          <div>
            <p class="type-title">{{ type.title }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="gradient-overlay top">
      <NuxtImg format="webp" loading="lazy" src="/images/shadow2.png" alt="" />
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