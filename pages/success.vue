<template>
    <div class="success-wrapper container">
        <h1 class="success-title">Загрузка завершина успешна</h1>
        <p class="success-text">
            Ваш цифровой аватар готов,теперь
            можете приступать к созданию
            впечатляющих изображений.
        </p>
        <img class="success-img" src="/images/success.png" alt="">
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
<style scoped>
.success-wrapper {
    background: #0F0F0F;
    color: white;
    padding: 2rem 1rem;
    max-width: 400px;
    margin: 0 auto;
    font-family: sans-serif;
}

.success-title {
    font-size: 33px;
    font-weight: 550;
    color: #F0A8E1;
    text-align: left;
}

.success-text {
    color: #fff;
    font-size: 17.97px;
    text-align: left;
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-weight: regular;
}

.success-img {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 50%;
    margin-top: 4rem;
    margin-bottom: 6rem;
    margin-right: 7.2rem;
}
</style>