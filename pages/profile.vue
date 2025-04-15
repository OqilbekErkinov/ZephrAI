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
                Премиум <br> подписка <span>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L1 13" stroke="#F0A8E1" stroke-linecap="round" />
                    </svg>
                </span>
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

            <!-- Settings Section -->
            <div v-if="!showTariffDropdown">
                <div class="menu-item" @click="toggleSettings">
                    <div class="menu-text" :class="{ 'subtitle-greyed': showSettings }">Настройки</div>
                    <div class="menu-arrow">
                        <svg v-if="showSettings" width="14" height="15" viewBox="0 0 14 15" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.69873L13 13.7669M13 1.69873L1 13.7669" stroke="white" stroke-width="1.5"
                                stroke-linecap="round" />
                        </svg>
                        <svg v-else width="8" height="14" viewBox="0 0 8 14" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L1 13" stroke="white" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
                <transition name="expand">
                    <div v-if="showSettings" class="dropdown">
                        <div class="dropdown-subtitle" @click="toggleAvatarDropdown"
                            :class="{ 'subtitle-greyed': showAvatarDropdown }">
                            <svg class="me-2" width="19" height="19" viewBox="0 0 19 19" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_449_7706)">
                                    <path
                                        d="M15.085 14.8289C14.3762 13.0959 12.6729 11.875 10.6875 11.875H8.3125C6.32715 11.875 4.62383 13.0959 3.91504 14.8289C2.59395 13.441 1.78125 11.567 1.78125 9.5C1.78125 5.23613 5.23613 1.78125 9.5 1.78125C13.7639 1.78125 17.2188 5.23613 17.2188 9.5C17.2188 11.567 16.4061 13.441 15.085 14.8289ZM9.5 19C12.0196 19 14.4359 17.9991 16.2175 16.2175C17.9991 14.4359 19 12.0196 19 9.5C19 6.98044 17.9991 4.56408 16.2175 2.78249C14.4359 1.00089 12.0196 0 9.5 0C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19ZM6.23438 7.42188C6.23438 8.28797 6.57843 9.1186 7.19085 9.73102C7.80328 10.3434 8.6339 10.6875 9.5 10.6875C10.3661 10.6875 11.1967 10.3434 11.8091 9.73102C12.4216 9.1186 12.7656 8.28797 12.7656 7.42188C12.7656 6.55578 12.4216 5.72515 11.8091 5.11273C11.1967 4.50031 10.3661 4.15625 9.5 4.15625C8.6339 4.15625 7.80328 4.50031 7.19085 5.11273C6.57843 5.72515 6.23438 6.55578 6.23438 7.42188Z"
                                        :fill="showAvatarDropdown ? '#F0A8E1' : '#515151'" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_449_7706">
                                        <rect width="19" height="19" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Выбор аватара
                            <span class="menu-arrow">
                                <svg v-if="showAvatarDropdown" width="14" height="8" viewBox="0 0 14 8" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L7 1L10 4L13 7" stroke="white" stroke-linecap="round" />
                                </svg>
                                <svg v-else width="8" height="14" viewBox="0 0 8 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="white" stroke-linecap="round" />
                                </svg>
                            </span>
                        </div>
                        <transition name="expand">
                            <div v-if="showAvatarDropdown" class="dropdown-list">
                                <div v-for="(avatar, index) in avatars" :key="index" class="dropdown-item"
                                    @click="selectedAvatar = avatar" :class="{
                        'active-avatar': selectedAvatar === avatar,
                        'greyed': isDropdownOpen || selectedAvatar !== avatar
                    }">
                                    {{ avatar }}
                                    <span v-if="selectedAvatar === avatar" class="checkmark">
                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.5 9.5L0.812525 5.07503C0.291314 4.44958 0.736072 3.5 1.55023 3.5C1.83522 3.5 2.10549 3.62659 2.28794 3.84552L4.5 6.5L9.21206 0.845522C9.39451 0.626587 9.66478 0.5 9.94977 0.5C10.7639 0.5 11.2087 1.44958 10.6875 2.07503L4.5 9.5Z"
                                                fill="#23C72D" />
                                        </svg>
                                    </span>
                                </div>
                                <div class="dropdown-ite add-new mt-3 pb-2" @click="addNewAvatar">Добавить новый аватар
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.70459 6.61523H12M6.35231 1.23046V12" stroke="#F0A8E1"
                                            stroke-linecap="round" />
                                    </svg>
                                </div>
                            </div>
                        </transition>
                        <div class="dropdown-subtitle" @click="toggleAspectDropdown"
                            :class="{ 'subtitle-greyed': showAspectDropdown }">
                            <svg class="me-2" width="17" height="19" viewBox="0 0 17 19" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.5714 2.96875C14.9054 2.96875 15.1786 3.23594 15.1786 3.5625V15.4375C15.1786 15.7641 14.9054 16.0312 14.5714 16.0312H2.42857C2.09464 16.0312 1.82143 15.7641 1.82143 15.4375V3.5625C1.82143 3.23594 2.09464 2.96875 2.42857 2.96875H14.5714ZM2.42857 1.1875C1.08906 1.1875 0 2.25254 0 3.5625V15.4375C0 16.7475 1.08906 17.8125 2.42857 17.8125H14.5714C15.9109 17.8125 17 16.7475 17 15.4375V3.5625C17 2.25254 15.9109 1.1875 14.5714 1.1875H2.42857Z"
                                    :fill="showAspectDropdown ? '#F0A8E1' : '#515151'" />
                            </svg>
                            Соотношение сторон
                            <span class="menu-arrow">
                                <svg v-if="showAspectDropdown" width="14" height="8" viewBox="0 0 14 8" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L7 1L10 4L13 7" stroke="white" stroke-linecap="round" />
                                </svg>
                                <svg v-else width="8" height="14" viewBox="0 0 8 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="white" stroke-linecap="round" />
                                </svg>
                            </span>
                        </div>
                        <transition name="expand">
                            <div v-if="showAspectDropdown" class="dropdown-list">
                                <div v-for="(option, index) in aspectRatios" :key="index" class="dropdown-item"
                                    @click="selectedAspect = option" :class="{
                        'active-avatar': selectedAspect === option,
                        'greyed': isDropdownOpen || selectedAspect !== option
                    }">
                                    {{ option }}
                                    <span v-if="selectedAspect === option" class="checkmark">
                                        <svg width="15" height="14" viewBox="0 0 11 10" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.5 9.5L0.812525 5.07503C0.291314 4.44958 0.736072 3.5 1.55023 3.5C1.83522 3.5 2.10549 3.62659 2.28794 3.84552L4.5 6.5L9.21206 0.845522C9.39451 0.626587 9.66478 0.5 9.94977 0.5C10.7639 0.5 11.2087 1.44958 10.6875 2.07503L4.5 9.5Z"
                                                fill="#23C72D" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </transition>
                        <div class="dropdown-subtitle" @click="showLanguageModal = true">
                            <svg class="me-2" width="19" height="19" viewBox="0 0 19 19" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_449_8189)">
                                    <path
                                        d="M13.0625 9.5C13.0625 10.3238 13.018 11.118 12.94 11.875H6.06367C5.98203 11.118 5.94121 10.3238 5.94121 9.5C5.94121 8.67617 5.98574 7.88203 6.06367 7.125H12.94C13.0217 7.88203 13.0625 8.67617 13.0625 9.5ZM14.1312 7.125H18.6994C18.8961 7.88574 19 8.67988 19 9.5C19 10.3201 18.8961 11.1143 18.6994 11.875H14.1312C14.2092 11.1105 14.25 10.3164 14.25 9.5C14.25 8.68359 14.2092 7.88945 14.1312 7.125ZM18.3098 5.9375H13.9791C13.608 3.56621 12.8732 1.58086 11.927 0.311719C14.8326 1.07988 17.1965 3.1877 18.3061 5.9375H18.3098ZM12.7768 5.9375H6.22324C6.44961 4.58672 6.79844 3.3918 7.2252 2.42324C7.61484 1.54746 8.04902 0.912891 8.46836 0.512109C8.88398 0.11875 9.2291 0 9.5 0C9.7709 0 10.116 0.11875 10.5316 0.512109C10.951 0.912891 11.3852 1.54746 11.7748 2.42324C12.2053 3.38809 12.5504 4.58301 12.7768 5.9375ZM5.0209 5.9375H0.690234C1.80352 3.1877 4.16367 1.07988 7.07305 0.311719C6.12676 1.58086 5.39199 3.56621 5.0209 5.9375ZM0.300586 7.125H4.86875C4.79082 7.88945 4.75 8.68359 4.75 9.5C4.75 10.3164 4.79082 11.1105 4.86875 11.875H0.300586C0.103906 11.1143 0 10.3201 0 9.5C0 8.67988 0.103906 7.88574 0.300586 7.125ZM7.2252 16.573C6.79473 15.6082 6.44961 14.4133 6.22324 13.0625H12.7768C12.5504 14.4133 12.2016 15.6082 11.7748 16.573C11.3852 17.4488 10.951 18.0834 10.5316 18.4842C10.116 18.8813 9.7709 19 9.5 19C9.2291 19 8.88398 18.8813 8.46836 18.4879C8.04902 18.0871 7.61484 17.4525 7.2252 16.5768V16.573ZM5.0209 13.0625C5.39199 15.4338 6.12676 17.4191 7.07305 18.6883C4.16367 17.9201 1.80352 15.8123 0.690234 13.0625H5.0209ZM18.3098 13.0625C17.1965 15.8123 14.8363 17.9201 11.9307 18.6883C12.877 17.4191 13.608 15.4338 13.9828 13.0625H18.3135H18.3098Z"
                                        :fill="showLanguageModal ? '#F0A8E1' : '#515151'" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_449_8189">
                                        <rect width="19" height="19" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            Язык
                            <span class="menu-arrow" style="color: #515151">Русский</span>
                        </div>
                        <LanguageModal :visible="showLanguageModal" @close="showLanguageModal = false" />

                    </div>
                </transition>
            </div>

            <!-- Social Networks (hidden when any dropdown is open) -->
            <div class="menu-item" v-if="!showSettings && !showTariffDropdown">
                <div @click="showSocialNetworkModal = true" class="menu-text">Соцсети</div>
                <div class="menu-arrow">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L1 13" stroke="white" stroke-linecap="round" />
                    </svg>
                </div>
                <SocialNetworkModal :visible="showSocialNetworkModal" @close="showSocialNetworkModal = false" />
            </div>
            
            <!-- Buy Photos (hidden when settings dropdown is open) -->
            <div class="menu-item" v-if="!showSettings && !showTariffDropdown">
                <div @click="toggleTariffDropdown" class="menu-text">Купить фото</div>
                <div class="menu-arrow">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L1 13" stroke="white" stroke-linecap="round" />
                    </svg>
                </div>
            </div>

            <transition name="expand">
                <div v-if="showTariffDropdown" class="tariff-dropdown">
                    <div class="dropdown-header-with-close">
                        <p class="dropdown-header">Выберите один из подходящих тарифов</p>
                        <span class="close-icon" @click="showTariffDropdown = false">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.69873L13 13.7669M13 1.69873L1 13.7669" stroke="white" stroke-width="1.5"
                                    stroke-linecap="round" />
                            </svg>
                        </span>
                    </div>
                    <div v-for="amount in [25, 50, 100, 200]" :key="amount" class="tariff-btn"
                        @click="selectPackage(amount)">
                        {{ amount }} фото
                    </div>
                </div>
            </transition>

            <PaymentModal :visible="showPaymentModal" @close="showPaymentModal = false" />

            <!-- Care Service (hidden when any dropdown is open) -->
            <div class="menu-item" v-if="!showSettings && !showTariffDropdown">
                <a @click="showCareServiceModal = true" target="_blank" class="menu-text">
                    Служба заботы
                </a>
                <div class="menu-arrow">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L1 13" stroke="white" stroke-linecap="round" />
                    </svg>
                </div>
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
import LanguageModal from '~/components/LanguageModal.vue'

const showSettings = ref(false)
const showAvatarDropdown = ref(false)
const showAspectDropdown = ref(false)
const showModal = ref(false)
const showCareServiceModal = ref(false)
const showSocialNetworkModal = ref(false)
const showTariffDropdown = ref(false)
const showPaymentModal = ref(false)
const showLanguageModal = ref(false)

const avatars = ref(['Аватар 1', 'Аватар 2', 'Наташа'])
const selectedAvatar = ref('Аватар 2')
const aspectRatios = ref(['Фото 3:4', 'Фото 16:9', 'Фото Квадрат', 'Фото Альбом'])
const selectedAspect = ref('Фото 3:4')
const selectedPhotoPackage = ref(null)

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
    showTariffDropdown.value = false
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

const toggleTariffDropdown = () => {
    showTariffDropdown.value = !showTariffDropdown.value
    showSettings.value = false
}

const selectPackage = (amount) => {
    selectedPhotoPackage.value = amount
    showPaymentModal.value = true
}
</script>

<style scoped>
.container {
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
    margin-bottom: -1.4rem;
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
    padding: 5px 0 17px 0;
}

.balance-value {
    display: flex;
    align-items: center;
    padding: 5px 0 17px 0;
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
    position: relative;
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
    font-size: 18px;
}

.dropdown {
    padding: 10px 20px;
    position: relative;
    margin-top: 0;
    border-top: 1px solid #333;
    z-index: 1;
}

.dropdown-subtitle {
    font-size: 16px;
    padding: 10px 0;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    cursor: pointer;
    color: #fff;
    border-bottom: 1px solid #333;
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
    margin-left: 12px;
    border-bottom: 1px solid #333;
}

.dropdown-subtitle {
    padding: 10px 12px;
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
    position: relative;
    margin-top: 0;
    border-top: 1px solid #333;
    z-index: 1;
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


.expand-enter-active {
    transition: all 0.8s ease;
    overflow: hidden;
}

.expand-leave-active {
    transition: all 0.3s ease;
    overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
    max-height: 0;
    opacity: 0;
    transform: translateY(-10px);
}

.expand-enter-to,
.expand-leave-from {
    max-height: 1000px;
    opacity: 1;
    transform: translateY(0);
}

.menu-arrow {
    display: flex;
    margin-left: auto;
}
</style>