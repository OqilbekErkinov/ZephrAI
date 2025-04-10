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
          <img class="large-image2" src="/images/image1.jpg" alt="Image 1" />
        </div>
        <div class="image-card large large-1">
          <img class="large-image" src="/images/image2.jpg" alt="Image 2" />
        </div>
      </div>
      <div class="image-grid small mt-3">
        <div class="image-card small" v-for="(image, index) in images" :key="index">
          <img :src="image" :alt="`Image ${index + 3}`" />
        </div>
      </div>
    </div>
    <div>
      <h3 class="mt-3"><span style="color: #F0A8E1">Попробуй,</span> как это работает!</h3>
      <p>ZephyrAI покажет тебя в новом облике!</p>
    </div>

    <div class="second-gallery">
      <div class="background-image">

        <!-- Gradientlar -->
        <div class="gradient-overlay top">
          <img src="/images/gradient1.png" alt="">
        </div>
        <div class="gradient-overlay bottom">
          <img src="/images/gradient2.png" alt="">
        </div>

        <div class="image-container">
          <div class="image-card speciall mt-4">
            <img src="/images/img1.jpg" alt="Image 3" />
            <div class="zagruzit">Загрузи...</div>
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

        <div class="overlay-text">Наслаждайтесь волшебством
          <svg width="25" height="25" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.104 13.7423C16.8658 13.1031 14.9839 11.0258 16.5522 0.31958C18.1204 11.0258 16.2385 13.1031 28.0003 13.7423C16.2385 14.3814 18.1204 16.4588 16.5522 27.1649C14.9839 16.4588 16.8658 14.3814 5.104 13.7423Z"
              fill="#FADC39" />
            <g filter="url(#filter0_f_245_4319)">
              <path
                d="M8.5542 13.7422C16.6755 13.3008 15.3761 11.8665 16.4589 4.47412C17.5417 11.8665 16.2423 13.3008 24.3636 13.7422C16.2423 14.1835 17.5417 15.6178 16.4589 23.0102C15.3761 15.6178 16.6755 14.1835 8.5542 13.7422Z"
                fill="white" fill-opacity="0.7" />
            </g>
            <path
              d="M4.47607 4.63402C8.5367 4.41335 7.887 3.69618 8.42842 0C8.96984 3.69618 8.32013 4.41335 12.3808 4.63402C8.32013 4.85469 8.96984 5.57186 8.42842 9.26804C7.887 5.57186 8.5367 4.85469 4.47607 4.63402Z"
              fill="#FADC39" />
            <g filter="url(#filter1_f_245_4319)">
              <path
                d="M5.66748 4.63401C8.47125 4.48164 8.02264 3.98645 8.39648 1.43433C8.77032 3.98645 8.32171 4.48164 11.1255 4.63401C8.32171 4.78637 8.77032 5.28156 8.39648 7.83369C8.02264 5.28156 8.47125 4.78637 5.66748 4.63401Z"
                fill="white" fill-opacity="0.7" />
            </g>
            <path
              d="M0.398926 23.9692C6.55988 23.6344 5.57413 22.5462 6.39559 16.9382C7.21705 22.5462 6.23129 23.6344 12.3922 23.9692C6.23129 24.304 7.21705 25.3921 6.39559 31.0001C5.57413 25.3921 6.55988 24.304 0.398926 23.9692Z"
              fill="#FADC39" />
            <g filter="url(#filter2_f_245_4319)">
              <path
                d="M2.20605 23.9692C6.46005 23.738 5.77941 22.9867 6.34661 19.1145C6.9138 22.9867 6.23317 23.738 10.4872 23.9692C6.23317 24.2004 6.9138 24.9517 6.34661 28.8239C5.77941 24.9517 6.46005 24.2004 2.20605 23.9692Z"
                fill="white" fill-opacity="0.7" />
            </g>
            <defs>
              <filter id="filter0_f_245_4319" x="5.3446" y="1.26453" width="22.2288" height="24.9553"
                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="1.6048" result="effect1_foregroundBlur_245_4319" />
              </filter>
              <filter id="filter1_f_245_4319" x="4.55941" y="0.326251" width="7.67416" height="8.61556"
                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="0.554037" result="effect1_foregroundBlur_245_4319" />
              </filter>
              <filter id="filter2_f_245_4319" x="0.524837" y="17.4333" width="11.6437" height="13.0719"
                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="0.840609" result="effect1_foregroundBlur_245_4319" />
              </filter>
            </defs>
          </svg>

        </div>
      </div>
    </div>

    <div class="third-gallery">
      <div>
        <h3 style="color: #F0A8E1">Кадры просто 
супер</h3>
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
  "/images/image5.png",
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