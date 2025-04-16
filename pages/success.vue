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
<style scoped>
.success-wrapper {
    color: white;
    max-width: 450px;
    margin: 0 auto;
    margin-top: 5rem;
}

.success-title {
    color: #F0A8E1;
    text-align: center;
}

.success-text {
    color: #fff;
    font-size: 24px;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-weight: regular;
}

.success-img {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 75%;
    margin-top: 4rem;
    margin-bottom: 6rem;
    margin-right: 7.5rem;
}
</style>