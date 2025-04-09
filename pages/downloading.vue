<template>
  <div class="downloading-wrapper container">
    <h1 class="downloading-title">Загрузка может занять несколько минут!</h1>
    <p class="downloading-text">
      Пожалуйста не закрывайте и не
      сворачивайте приложение пока
      мы создаём ваш цифровой
      аватар.
    </p>
    <img class="downloading-img" src="/images/downloading.png" alt="">
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
onMounted(() => {
  setTimeout(() => {
    router.push('/success');
  }, 10000);
});
</script>
<style scoped>
.downloading-wrapper {
  background: #0f0f0f;
  color: white;
  padding: 2rem 1rem;
  max-width: 400px;
  margin: 0 auto;
  font-family: sans-serif;
}

.downloading-title {
  font-size: 33px;
  font-weight: 550;
  color: #f0a8e1;
  text-align: left;
}

.downloading-text {
  color: #fff;
  font-size: 17.97px;
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-weight: regular;
}

.downloading-img {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 30%;
  margin-top: 4rem;
  margin-bottom: 6%;
}
</style>