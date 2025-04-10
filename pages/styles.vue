<template>
    <div class="promo-wrapper">
        <div class="image-gallerry">
            <img v-for="(img, i) in images" :key="i" :src="img" alt="photo" class="gallery-img" />
        </div>

        <h1 class="main-title">Как это работает</h1>
        <p class="subtext">
            Мы улучшаем фото, добавляем стильные эффекты и помогаем создавать
            идеальные кадры. Для этого вам нужно приобрести PREMIUM.
            Оплачивай и начинаем прямо сейчас!
            Суперскидка только сейчас -50%!
        </p>
        <span style="color: #F0A8E1; margin: 1rem;">199 990 сум</span>вместо <span class="highlight">399 980 сум</span>
        <div class="premium-box">
            <h3>PREMIUM</h3>
            <p>Создавайте уникальные изображения с возможностями:</p>
            <ul>
                <li><span class="green">✔</span> 70 уникальных нейрофотографий</li>
                <li><span class="green">✔</span> 100+ готовых стилей на выбор</li>
                <li><span class="green">✔</span> 1 персональная модель, созданная на &nbsp;&nbsp;&nbsp;&nbsp;основе
                    твоих фото</li>
                <li><span class="green">✔</span> Режим «Создатель» где ты сможешь &nbsp;&nbsp;&nbsp;&nbsp;воплотить свои
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
    '/images/styles1.png'
]
</script>

<style scoped>
.promo-wrapper {
    background: #0F0F0F;
    color: white;
    max-width: 450px;
    /* margin: 0.5rem; */
    font-family: sans-serif;
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
    margin: 1rem;
}

.subtext {
    color: #ccc;
    font-size: 14.5px;
    text-align: left;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    margin: 1rem;
}

.highlight {
    color: #F0A8E1;
    text-decoration: line-through;
}

.premium-box {
    background: #222222;
    border-radius: 15px;
    padding: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    margin: 1rem;
}

.premium-box h3 {
    margin-bottom: 0.5rem;
    font-size: 1rem;
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
    margin: 0.5rem 0;
}
</style>