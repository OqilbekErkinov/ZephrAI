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
                    <svg @click="showModal = true" class="me-2" width="13" height="13" viewBox="0 0 13 13" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.8125 6.5C0.8125 3.35888 3.35888 0.8125 6.5 0.8125C9.64112 0.8125 12.1875 3.35888 12.1875 6.5C12.1875 9.64112 9.64112 12.1875 6.5 12.1875C3.35888 12.1875 0.8125 9.64112 0.8125 6.5ZM6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C10.0899 13 13 10.0899 13 6.5C13 2.91015 10.0899 0 6.5 0ZM6.31632 3.4125C6.08747 3.4125 5.90195 3.59802 5.90195 3.82687V4.02035C5.90195 4.24471 6.08383 4.4266 6.3082 4.4266C6.34507 4.4266 6.38079 4.42169 6.41475 4.41248C6.44871 4.42169 6.48444 4.4266 6.52131 4.4266C6.74568 4.4266 6.92756 4.24471 6.92756 4.02035V3.82687C6.92756 3.59802 6.74204 3.4125 6.51319 3.4125H6.31632ZM5.45574 5.63007C5.23137 5.63007 5.04949 5.81196 5.04949 6.03632C5.04949 6.26069 5.23137 6.44257 5.45574 6.44257H5.98719V8.775H5.2C4.97563 8.775 4.79375 8.95688 4.79375 9.18125C4.79375 9.40562 4.97563 9.5875 5.2 9.5875H6.39344H7.8C8.02436 9.5875 8.20625 9.40562 8.20625 9.18125C8.20625 8.95688 8.02436 8.775 7.8 8.775H6.79969V6.04445C6.79969 5.8156 6.61417 5.63007 6.38532 5.63007H5.45574Z"
                            fill="#808080" />
                    </svg>
                    <span class="credit-label">Кредит</span>
                    <span class="credit-value">0</span>
                    <CreditInfoModal :visible="showModal" @close="showModal = false" />
                </div>
            </div>
            <div class="menu-item" @click="toggleSettings">
                <div class="menu-text" :class="{ 'subtitle-greyed': showSettings }">Настройки</div>
                <div class="menu-arrow">{{ showSettings ? '✕' : '›' }}</div>
            </div>
            <div v-if="showSettings" class="dropdown">
                <div class="dropdown-subtitle" @click="toggleAvatarDropdown"
                    :class="{ 'subtitle-greyed': showAvatarDropdown }">
                    Выбор аватара
                    <span class="menu-arrow">{{ showAvatarDropdown ? '˄' : '›' }}</span>
                </div>
                <div v-if="showAvatarDropdown" class="dropdown-list">
                    <div v-for="(avatar, index) in avatars" :key="index" class="dropdown-item"
                        @click="selectedAvatar = avatar" :class="{
                        'active-avatar': selectedAvatar === avatar,
                        'greyed': isDropdownOpen || selectedAvatar !== avatar
                    }">
                        {{ avatar }}
                        <span v-if="selectedAvatar === avatar" class="checkmark">✔</span>
                    </div>
                    <div class="dropdown-item add-new" @click="addNewAvatar">➕ Добавить новый аватар</div>
                </div>
                <div class="dropdown-subtitle" @click="toggleAspectDropdown"
                    :class="{ 'subtitle-greyed': showAspectDropdown }">
                    Соотношение сторон
                    <span class="menu-arrow">{{ showAspectDropdown ? '˄' : '›' }}</span>
                </div>
                <div v-if="showAspectDropdown" class="dropdown-list">
                    <div v-for="(option, index) in aspectRatios" :key="index" class="dropdown-item"
                        @click="selectedAspect = option" :class="{
                        'active-avatar': selectedAspect === option,
                        'greyed': isDropdownOpen || selectedAspect !== option
                    }">
                        {{ option }}
                        <span v-if="selectedAspect === option" class="checkmark">✔</span>
                    </div>
                </div>
            </div>
            <div class="menu-item">
                <div @click="showSocialNetworkModal = true" class="menu-text" :class="{ 'subtitle-greyed': showSocial }">Соцсети</div>
                <div class="menu-arrow">›</div>
                <SocialNetworkModal :visible="showSocialNetworkModal" @close="showSocialNetworkModal = false" />
            </div>
            <div class="menu-item">
                <div class="menu-text" @click="toggleTariffDropdown">Купить фото</div>
                <div class="menu-arrow">›</div>
            </div>
            <div v-if="showTariffDropdown" class="tariff-dropdown">
                <div class="dropdown-header-with-close">
                    <p class="dropdown-header">Выберите один из подходящих тарифов</p>
                    <span class="close-icon" @click="showTariffDropdown = false">✕</span>
                </div>

                <div v-for="amount in [25, 50, 100, 200]" :key="amount" class="tariff-btn"
                    @click="selectPackage(amount)">
                    {{ amount }} фото
                </div>
            </div>
            <PaymentModal :visible="showPaymentModal" @close="showPaymentModal = false" />
            <div class="menu-item">
                <a @click="showCareServiceModal = true" target="_blank" class="menu-text"
                    :class="{ 'subtitle-greyed': showSocial }">
                    Служба заботы
                </a>
                <div class="menu-arrow">›</div>
                <CareServiceModal :visible="showCareServiceModal" @close="showCareServiceModal = false" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import PaymentModal from '~/components/PaymentModal.vue'
import CreditInfoModal from '~/components/CreditInfoModal.vue'
import CareServiceModal from '~/components/CareServiceModal.vue'
import SocialNetworkModal from '~/components/SocialNetworkModal.vue'

const showSettings = ref(false)
const showAvatarDropdown = ref(false)
const showAspectDropdown = ref(false)
const showSocial = ref(false)
const showModal = ref(false)
const showCareServiceModal = ref(false)
const showSocialNetworkModal = ref(false)

const avatars = ref(['Аватар 1', 'Аватар 2', 'Наташа'])
const selectedAvatar = ref('Аватар 2')
const aspectRatios = ref(['Фото 3:4', 'Фото 16:9', 'Фото Квадрат', 'Фото Альбом'])
const selectedAspect = ref('Фото 3:4')

const userImage = ref('')
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
const addNewAvatar = () => {
    const newName = prompt('Yangi avatar nomi:')
    if (newName) avatars.value.push(newName)
}
const toggleSettings = () => {
    showSettings.value = !showSettings.value
    if (!showSettings.value) {
        showAvatarDropdown.value = false
        showAspectDropdown.value = false
    }
}
const toggleAvatarDropdown = () => {
    showAvatarDropdown.value = !showAvatarDropdown.value
    showAspectDropdown.value = false
}
const toggleAspectDropdown = () => {
    showAspectDropdown.value = !showAspectDropdown.value
    showAvatarDropdown.value = false
}
const toggleSocial = () => {
    showSocial.value = !showSocial.value
    showAvatarDropdown.value = false
    showAspectDropdown.value = false
}
const showTariffDropdown = ref(false)
const showPaymentModal = ref(false)
const selectedPhotoPackage = ref(null)

const toggleTariffDropdown = () => {
    showTariffDropdown.value = !showTariffDropdown.value
}
const selectPackage = (amount) => {
    selectedPhotoPackage.value = amount
    showTariffDropdown.value = false
    showPaymentModal.value = true
}
</script>

<style scoped>
.container {
    font-family: Arial, sans-serif;
    background-color: #131313;
    color: white;
    min-height: 100vh;
    max-width: 400px;
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
    flex-grow: 1;
    margin: 1rem 0;
}
.balance-value {
    display: flex;
    align-items: center;
    margin: 1rem 0;
}
.credit-label {
    color: #fff;
    margin-right: 8px;
    font-size: 14px;
}
.credit-value {
    font-size: 16px;
}
.menu-items {
    background-color: #222222;
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
.menu-arrow {
    color: #888;
    font-size: 18px;
}
.dropdown {
    padding: 10px 20px;
}
.dropdown-subtitle {
    font-size: 16px;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    color: #fff;
}
.dropdown-list {
    padding-left: 10px;
}
.dropdown-item {
    padding: 8px 0;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ddd;
    cursor: pointer;
}
.checkmark {
    color: #66FF99;
    font-size: 18px;
}
.add-new {
    color: #F0A8E1;
    font-style: italic;
}
.dropdown-subtitle {
    padding: 8px 12px;
    cursor: pointer;
    transition: color 0.2s ease;
    color: #ffffff;
}
.subtitle-greyed {
    color: #F0A8E1 !important;
}
.dropdown-item {
    padding: 8px 12px;
    cursor: pointer;
    transition: all 0.2s ease;
}
.active-avatar {
    background-color: #383838;
    color: #ffffff !important;
    border-radius: 10px;
}
.greyed {
    color: #999999 !important;
}
.tariff-dropdown {
    background-color: #222222;
    padding: 16px;
    margin-top: -10.8rem;
    position: relative;
    z-index: 8000;
}
.dropdown-header {
    color: #ccc;
    font-size: 14px;
    margin-bottom: 12px;
}
.tariff-btn {
    background-color: #F0A8E1;
    color: white;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s ease;
}
.tariff-btn:hover {
    background-color: #ff86e5;
}
.dropdown-header-with-close {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}
.dropdown-header {
    color: #ccc;
    font-size: 14px;
}
.close-icon {
    font-size: 16px;
    color: #ccc;
    cursor: pointer;
    padding: 4px;
    transition: color 0.2s ease;
    margin-top: -0.4rem
}
.close-icon:hover {
    color: #fff;
}
</style>