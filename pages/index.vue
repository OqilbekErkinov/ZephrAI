<template>
  <div class="home-page container text-center py-4">
    <h1>Zephyr<span style="color: #F0A8E1">AI</span> -</h1>
    <h3>персональный ассистент по нейрофотографиям!</h3>
    <p class="mt-3">
      ZephyrAI - нейросеть, которая обучается твоей внешности, создавая
      впечатляющие изображения, где ты – в центре внимания!
    </p>

    <div class="image-gallery mt-4">
      <div class="image-grid">
        <div class="image-card large">
          <img src="/images/image1.jpg" alt="Image 1" />
        </div>
        <div class="image-card large">
          <img src="/images/image2.jpg" alt="Image 2" />
        </div>
      </div>
      <div class="image-grid small mt-3">
        <div class="image-card small" v-for="(image, index) in images" :key="index">
          <img :src="image" :alt="`Image ${index + 3}`" />
        </div>
      </div>
    </div>
    <div>
      <h3><span style="color: #F0A8E1">Попробуй,</span> как это работает!</h3>
      <p>ZephyrAI покажет тебя в новом облике!</p>
    </div>

    <div class="second-gallery">
      <div class="background-image">
        <div class="image-container">
          <div class="image-card speciall mt-4">
            <img src="/images/img1.jpg" alt="Image 3" />
            <div class="zagruzit">Загрузитe...</div>
          </div>
          <div class="image-galleryyy">
            <div class="image-card special me-2">
              <img src="/images/img2.png" alt="Image 4" />
            </div>
            <div class="image-card special">
              <img src="/images/img3.png" alt="Image 5" />
            </div>
          </div>
        </div>
        <div class="overlay-text">Наслаждайтесь волшебством ✨</div>
      </div>
    </div>
    <div class="third-gallery">
      <div>
          <h3 style="color: #F0A8E1">Кадры просто бомба!</h3>
          <p>Элегантность в каждой детали, совершенство в каждом образе!</p>
      </div>
      <div class="image-grid third">
        <div class="image-card special" v-for="(image, index) in thirdGalleryImages" :key="index">
          <img :src="image" :alt="`Image ${index + 5}`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const images = ref([
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg"
]);
const thirdGalleryImages = ref([
  "/images/img5.png",
  "/images/img6.png",
  "/images/img7.png",
  "/images/img8.png",
  "/images/img9.png",
  "/images/img10.png",
  "/images/img11.png",
  "/images/img12.png"
]);
</script>