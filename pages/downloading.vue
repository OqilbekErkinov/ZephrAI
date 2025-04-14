<template>
  <div class="downloading-wrapper container">
    <h1 class="downloading-title">Загрузка может занять несколько минут!</h1>
    <p class="downloading-text">
      Это займёт около 5-10 минут.
      Пожалуйста не закрывайте и не
      сворачивайте приложение пока
      мы создаём ваш цифровой
      аватар.
    </p>

    <div class="image-wrapper" ref="imageWrapper">
      <img class="downloading-img" src="/images/downloading.png" alt="" />

      <transition name="fade">
        <svg v-if="showIcon" class="floating-icon"
          :style="{ top: iconPosition.top + 'px', left: iconPosition.left + 'px' }" width="150" height="130"
          viewBox="0 0 208 232" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M35.9438 102.848C123.968 98.0641 109.884 82.5177 121.621 2.39355C133.357 82.5177 119.274 98.0641 207.298 102.848C119.274 107.631 133.357 123.178 121.621 203.302C109.884 123.178 123.968 107.631 35.9438 102.848Z"
            fill="#FADC39" />
          <g filter="url(#filter0_f_463_8716)">
            <path
              d="M61.7646 102.849C122.543 99.5461 112.819 88.8116 120.923 33.4878C129.026 88.8116 119.302 99.5461 180.081 102.849C119.302 106.152 129.026 116.886 120.923 172.21C112.819 116.886 122.543 106.152 61.7646 102.849Z"
              fill="white" fill-opacity="0.7" />
          </g>
          <path
            d="M31.2441 34.6806C61.6335 33.0291 56.7712 27.6619 60.8231 0C64.875 27.6619 60.0127 33.0291 90.4021 34.6806C60.0127 36.332 64.875 41.6993 60.8231 69.3612C56.7712 41.6993 61.6335 36.332 31.2441 34.6806Z"
            fill="#FADC39" />
          <g filter="url(#filter1_f_463_8716)">
            <path
              d="M40.1611 34.679C61.1443 33.5387 57.787 29.8328 60.5847 10.7329C63.3825 29.8328 60.0252 33.5387 81.0083 34.679C60.0252 35.8193 63.3825 39.5253 60.5847 58.6252C57.787 39.5253 61.1443 35.8193 40.1611 34.679Z"
              fill="white" fill-opacity="0.7" />
          </g>
          <path
            d="M0.731445 179.381C46.8395 176.875 39.4622 168.732 45.6099 126.762C51.7576 168.732 44.3804 176.875 90.4884 179.381C44.3804 181.887 51.7576 190.03 45.6099 232C39.4622 190.03 46.8395 181.887 0.731445 179.381Z"
            fill="#FADC39" />
          <g filter="url(#filter2_f_463_8716)">
            <path
              d="M14.2598 179.381C46.0962 177.651 41.0024 172.028 45.2473 143.049C49.4921 172.028 44.3983 177.651 76.2348 179.381C44.3983 181.111 49.4921 186.734 45.2473 215.713C41.0024 186.734 46.0962 181.111 14.2598 179.381Z"
              fill="white" fill-opacity="0.7" />
          </g>
          <defs>
            <filter id="filter0_f_463_8716" x="37.7443" y="9.46747" width="166.357" height="186.763"
              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="12.0102" result="effect1_foregroundBlur_463_8716" />
            </filter>
            <filter id="filter1_f_463_8716" x="31.8684" y="2.44018" width="57.4326" height="64.4776"
              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="4.14637" result="effect1_foregroundBlur_463_8716" />
            </filter>
            <filter id="filter2_f_463_8716" x="1.67768" y="130.467" width="87.1393" height="97.8282"
              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="6.29104" result="effect1_foregroundBlur_463_8716" />
            </filter>
          </defs>
        </svg>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const showIcon = ref(false);
const iconPosition = ref({ top: 0, left: 0 });
const imageWrapper = ref(null);

let intervalId = null;

const updateIcon = () => {
  if (!imageWrapper.value) return;

  const imageRect = imageWrapper.value.getBoundingClientRect();

  const angle = Math.random() * 2 * Math.PI;
  const radius = 120;
  const offsetX = radius * Math.cos(angle);
  const offsetY = radius * Math.sin(angle);

  iconPosition.value = {
    top: imageRect.height / 2 + offsetY - 20,
    left: imageRect.width / 2 + offsetX - 20,
  };

  showIcon.value = true;

  setTimeout(() => {
    showIcon.value = false;
  }, 1000); // show for 1 second
};

onMounted(() => {
  // Animation loop — independent
  intervalId = setInterval(updateIcon, 2000);
  updateIcon(); // run immediately too

  // Redirect after 9 sec
  setTimeout(() => {
    router.push('/success');
  }, 6000);
});

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<style scoped>
.downloading-wrapper {
  color: white;
  max-width: 450px;
  margin: 0 auto;
  position: relative;
}

.downloading-title {
  color: #f0a8e1;
  text-align: left;
}

.downloading-text {
  color: #fff;
  font-size: 24px;
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.image-wrapper {
  position: relative;
  width: fit-content;
  margin: 5rem auto 6%;
}

.downloading-img {
  width: 250px;
}

.floating-icon {
  position: absolute;
  z-index: 2;
  pointer-events: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
