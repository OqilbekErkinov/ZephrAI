<template>
  <div class="home-page container text-center py-4">
    <h1 style="font-size: 48px;">Zephyr<span style="color: #F0A8E1">AI</span> -</h1>
    <h2 class="visually-hidden">Раздел ассистента</h2>
    <h3>персональный ассистент по нейрофотографиям!</h3>
    <p class="mt-3" style="color: #BCBCBC;">
      ZephyrAI - нейросеть, которая обучается твоей внешности, создавая
      впечатляющие изображения, где ты – в центре внимания!
    </p>
    <div class="image-gallery mt-4">
      <div class="image-grid">
        <div class="image-card large">
          <NuxtImg width="400" height="588" format="webp" loading="eager" class="large-image2 img"
            src="/images/home-large1.webp" alt="Image 1" />
        </div>
        <div class="image-card large large-1">
          <NuxtImg format="webp" loading="eager" class="large-image img" src="/images/home-large2.webp" alt="Image 2" />
        </div>
      </div>
      <div class="image-grid small mt-3">
        <div class="image-card small" v-for="(image, index) in images" :key="index">
          <NuxtImg width="90" height="105" loading="lazy" format="webp" :src="image" :alt="`Image ${index + 3}`" />
        </div>
      </div>
    </div>
    <div>
      <h1 class="mt-3"><span style="color: #F0A8E1">Попробуй,</span> как это работает!</h1>
      <p class="text-light">ZephyrAI покажет тебя в новом облике!</p>
    </div>
    <div class="second-gallery">
      <div class="background-image">
        <div class="image-container">
          <div class="image-card speciall">
            <NuxtImg format="webp" src="/images/home7.webp" alt="Image 3" />
            <div class="zagruzit">Загрузи...</div>
          </div>
          <div class="image-galleryyy">
            <div class="image-card special me-2">
              <NuxtImg format="webp" loading="lazy" src="/images/home5.webp" alt="Image 4" />
            </div>
            <div class="image-card special">
              <NuxtImg format="webp" loading="lazy" src="/images/home6.webp" alt="Image 5" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="third-gallery">
      <div>
        <h1 style="color: #F0A8E1">Кадры просто супер</h1>
        <p class="text-light">Элегантность в каждой детали, совершенство в каждом образе!</p>
      </div>
      <div class="image-grid third">
        <div class="image-card special" v-for="(image, index) in thirdGalleryImages" :key="index">
          <NuxtImg format="webp" :src="image" :alt="`Image ${index + 5}`" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const images = ref([
  "/images/home4.webp",
  "/images/home3.webp",
  "/images/home2.webp",
  "/images/home1.webp"
]);
const thirdGalleryImages = ref([
  "/images/home10.webp",
  "/images/home11.webp",
  "/images/home12.webp",
  "/images/home13.webp",
  "/images/home14.webp",
  "/images/home15.webp",
  "/images/home16.webp",
  "/images/home17.webp"
]);
onMounted(() => {
  document.title = 'Zephyr AI';
  const meta = document.createElement('meta');
  meta.name = 'description';
  meta.content = 'Добро пожаловать на веб-апп Zephyr AI';
  document.head.appendChild(meta);
});
</script>