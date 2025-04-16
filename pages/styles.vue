<template>
    <div class="promo-wrapper">
        <div class="image-gallerry">
            <NuxtImg format="webp" loading="lazy" v-for="(img, i) in images" :key="i" :src="img" alt="photo" class="gallery-img" />
        </div>

        <h1 class="main-title">Как это работает</h1>
        <p class="subtext mb-4">
            Мы генерируем фото с помощью ИИ, добавляем стильные эффекты и помогаем создавать идеальные кадры. Для этого
            вам нужно приобрести PREMIUM. Оплачивайте — и начинаем прямо сейчас! Суперскидка — только сейчас: -50%!
        </p>
        <span style="font-size: 20px;">
            <span style="color: #F0A8E1; margin: 1rem; font-size: 24px;  font-family: Gropled, sans-serif">199 990
                сум</span>вместо&nbsp; <span class="highlight"
                style=" font-family: Gropled, sans-serif; font-size: 24px">399 980
                сум</span>
        </span>
        <div class="premium-box" style="margin-top: 32px">
            <h3>PREMIUM</h3>
            <p style="font-weight: 300 !important">Создавайте уникальные изображения с возможностями:</p>
            <ul>
                <li><span class="green">
                        <svg width="16" height="14" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 3H2.4L4.8 6L9.6 0H12L4.8 9L0 3Z" fill="#23C72D" />
                        </svg>
                    </span> 70 уникальных нейрофотографий</li>
                <li><span class="green">
                        <svg width="16" height="14" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 3H2.4L4.8 6L9.6 0H12L4.8 9L0 3Z" fill="#23C72D" />
                        </svg>
                    </span> 100+ готовых стилей на выбор</li>
                <li><span class="green">
                        <svg width="16" height="14" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 3H2.4L4.8 6L9.6 0H12L4.8 9L0 3Z" fill="#23C72D" />
                        </svg>
                    </span> 1 персональная модель, созданная на &nbsp;&nbsp;&nbsp;&nbsp;основе
                    твоих фото</li>
                <li><span class="green">
                        <svg width="16" height="14" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 3H2.4L4.8 6L9.6 0H12L4.8 9L0 3Z" fill="#23C72D" />
                        </svg>

                    </span> Режим «Создатель» где ты сможешь &nbsp;&nbsp;&nbsp;&nbsp;воплотить свои
                    самые смелые идеи</li>
            </ul>
            <button @click="showModal = true" class="premium-button">PREMIUM</button>
            <PaymentModal :visible="showModal" @close="showModal = false" />
        </div>
    </div>
</template>

<script setup>
import PaymentModal from '~/components/PaymentModal.vue'
import { ref } from 'vue'

const showModal = ref(false)
const images = [
    '/images/styles-back.png'
]
</script>

<style scoped>
.promo-wrapper {
    background: #0F0F0F;
    color: white;
    max-width: 450px;
    margin-bottom: 1rem;
}

.image-gallerry {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
}

.gallery-img {
    width: 130%;
    object-fit: cover;
    margin: 0;
}

.main-title {
    font-size: 40px;
    font-weight: 550;
    color: #F0A8E1;
    text-align: left;
    margin-top: 1rem;
    margin: 14px;
}

.subtext {
    font-size: 20px;
    text-align: left;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    margin: 14px;
}

.highlight {
    color: #F0A8E1;
    text-decoration: line-through;
}

.premium-box {
    background: #222222;
    border-radius: 17px;
    padding: 14px;
    margin-bottom: 1.5rem;
    font-size: 18px;
    margin: 14px;
}

.premium-box h3 {
    margin-bottom: 0.5rem;
    font-size: 20px;
    color: white;
}

.premium-box ul {
    padding-left: 0rem;
    list-style: none;
}

.premium-box .green {
    margin-bottom: 0.5rem;
    color: #a2ffa2;
}

.premium-box p {
    color: white;
}

.premium-box li {
    margin-bottom: 0.5rem;
}

.premium-button {
    width: 100%;
    background: #F0A8E1;
    color: white;
    padding: 0.75rem;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin: 0 0;
    margin-top: 20px
}
</style>