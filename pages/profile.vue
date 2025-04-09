<template>
    <div class="container">
        <div class="profile-title">Профиль</div>
        <div class="profile-photo">
            <div class="photo-container">
                <label for="fileUpload" class="photo-placeholder">
                    <img :src="userImage || '/images/profile.png'" alt="" class="avatar-img">
                    <input type="file" id="fileUpload" @change="onFileChange" hidden />
                </label>
            </div>
        </div>

        <div class="premium-card">
            <NuxtLink to="/" class="premium-name">Zephyr<span style="color: #F0A8E1;">AI</span></NuxtLink>
            <NuxtLink to="/styles" class="premium-link">
                Премиум <br> подписка <span>›</span>
            </NuxtLink>
        </div>

        <div class="menu-items">
            <div class="menu-item">
                <div class="balance-label">Баланс</div>
                <div class="balance-value">
                    <span class="credit-label">Кредит</span>
                    <span class="credit-value">0</span>
                </div>
            </div>

            <div class="menu-item">
                <NuxtLink to="/styles-category" class="menu-text">Генерации</NuxtLink>
                <div class="menu-count">0</div>
                <div class="menu-arrow">›</div>
            </div>

            <div class="menu-item" @click="toggleSettings">
                <div class="menu-text">Настройки</div>
                <div class="menu-arrow">{{ showSettings ? '✕' : '›' }}</div>
            </div>
            <div v-if="showSettings" class="dropdown">
                <div class="dropdown-item">Фото 3:4</div>
                <div class="dropdown-item">Фото 16:9</div>
                <div class="dropdown-item">Фото Квадрат</div>
                <div class="dropdown-item">Фото Альбом</div>
            </div>

            <div class="menu-item" @click="toggleSocial">
                <div class="menu-text">Соцсети</div>
                <div class="menu-arrow">{{ showSocial ? '✕' : '›' }}</div>
            </div>
            <div v-if="showSocial" class="dropdown">
                <div class="dropdown-item">
                    <img src="/images/telegram.png" class="icon"> Telegram
                </div>
                <div class="dropdown-item">
                    <img src="/images/instagram.png" class="icon"> Instagram
                </div>
                <div class="dropdown-item">
                    <img src="/images/facebook.png" class="icon"> Facebook
                </div>
            </div>

            <div class="menu-item">
                <div class="menu-text" @click="showModal = true">Купить фото</div>
                <div class="menu-arrow">›</div>
                <PaymentModal :visible="showModal" @close="showModal = false" />
            </div>

            <div class="menu-item">
                <a href="https://t.me/king_006x" target="_blank" class="menu-text">
                    Служба заботы
                </a>
                <div class="menu-arrow">›</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import PaymentModal from '~/components/PaymentModal.vue'

const showModal = ref(false)
const showSettings = ref(false)
const showSocial = ref(false)
const userImage = ref('')

const toggleSettings = () => {
    showSettings.value = !showSettings.value
    showSocial.value = false
}

const toggleSocial = () => {
    showSocial.value = !showSocial.value
    showSettings.value = false
}

const onFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            userImage.value = e.target.result
        }
        reader.readAsDataURL(file)
    }
}
</script>

<style scoped>
.container {
    font-family: Arial, sans-serif;
    background-color: #121212;
    color: white;
    min-height: 100vh;
    max-width: 600px;
    margin: 0 auto;
    padding: 0 15px;
}

.profile-title {
    text-align: center;
    font-size: 24px;
    color: #F0A8E1;
    margin: 20px 0;
    font-weight: bold;
}

.profile-photo {
    display: flex;
    justify-content: center;
    margin: 30px 0;
}

.photo-container {
    width: 140px;
    height: 130px;
    background: url('/images/profile2.png') no-repeat center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.photo-placeholder {
    width: 80px;
    height: 80px;
    border: 2px solid #666;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    margin-top: 2rem;
}

.avatar-img {
    width: 180%;
    height: 180%;
    margin-bottom: 1.9rem;
    object-fit: cover;
    border-radius: 50%;
}

.premium-card {
    background-color: #3F313C;
    border-radius: 15px;
    padding: 20px;
    padding-bottom: 4rem;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.premium-name {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
}

.premium-link {
    color: #F0A8E1;
    font-size: 14px;
    text-decoration: none;
    line-height: 0.9;
}

.premium-link span {
    font-size: 18px;
}

.balance-label {
    font-size: 16px;
    margin-right: 8.5rem;
}

.balance-value {
    display: flex;
    align-items: center;
}

.credit-label {
    color: #888;
    margin-right: 8px;
    font-size: 14px;
}

.credit-value {
    font-size: 16px;
}

.menu-items {
    background-color: #2A2A2A;
    border-radius: 15px;
    overflow: hidden;
    margin-top: -3rem;
    margin-bottom: 4rem;
}

.menu-item {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    border-bottom: 1px solid #333;
    cursor: pointer;
}

.menu-text {
    flex-grow: 1;
    font-size: 16px;
    color: #fff;
    text-decoration: none;
}

.menu-text:hover {
    color: #F0A8E1;
}

.menu-arrow {
    color: #888;
    font-size: 18px;
}

.dropdown {
    background-color: #1c1c1c;
    padding: 10px 20px;
}

.dropdown-item {
    padding: 10px 0;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.icon {
    width: 18px;
    height: 18px;
}
</style>