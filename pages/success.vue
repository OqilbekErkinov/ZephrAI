<template>
  <div class="success-wrapper container">
    <h1 class="success-title">Загрузка завершина успешна</h1>
    <p class="success-text">
      Ваш цифровой аватар готов,теперь
      можете приступать к созданию
      впечатляющих изображений.
    </p>
    <NuxtImg format="webp" loading="lazy" class="success-img" src="/images/success.png" alt="" />
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
onMounted(() => {
  setTimeout(() => {
    router.push('/styles-category');
  }, 6000);
});
</script>