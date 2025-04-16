<template>
    <div class="container">
        <div class="profile-title">Профиль</div>
        <div class="profile-photo">
            <div class="photo-container">
                <div class="photo-placeholder">
                    <NuxtImg format="webp" loading="lazy" src="/images/profile.png" alt="" />
                </div>
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
                <div class="menu-icon">
                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.66667 0C5.19583 0 4 1.21719 4 2.71429V12.2143C4 13.7114 5.19583 14.9286 6.66667 14.9286H21.3333C22.8042 14.9286 24 13.7114 24 12.2143V2.71429C24 1.21719 22.8042 0 21.3333 0H6.66667ZM16.5 4.52522L20.5 10.6324C20.7042 10.9462 20.725 11.3449 20.55 11.6757C20.375 12.0065 20.0375 12.2143 19.6667 12.2143H13.6667H11.6667H8.33333C7.95 12.2143 7.6 11.9895 7.43333 11.6375C7.26667 11.2855 7.3125 10.8656 7.55417 10.5603L10.2208 7.16741C10.4125 6.92567 10.6958 6.78571 11 6.78571C11.3042 6.78571 11.5917 6.92567 11.7792 7.16741L12.5 8.08348L14.8333 4.52098C15.0208 4.24107 15.3333 4.07143 15.6667 4.07143C16 4.07143 16.3125 4.24107 16.5 4.52522ZM8 4.07143C8 3.71149 8.14048 3.3663 8.39052 3.11178C8.64057 2.85727 8.97971 2.71429 9.33333 2.71429C9.68696 2.71429 10.0261 2.85727 10.2761 3.11178C10.5262 3.3663 10.6667 3.71149 10.6667 4.07143C10.6667 4.43137 10.5262 4.77656 10.2761 5.03107C10.0261 5.28559 9.68696 5.42857 9.33333 5.42857C8.97971 5.42857 8.64057 5.28559 8.39052 5.03107C8.14048 4.77656 8 4.43137 8 4.07143ZM2 3.73214C2 3.16808 1.55417 2.71429 1 2.71429C0.445833 2.71429 0 3.16808 0 3.73214V13.2321C0 16.4172 2.5375 19 5.66667 19H19C19.5542 19 20 18.5462 20 17.9821C20 17.4181 19.5542 16.9643 19 16.9643H5.66667C3.64167 16.9643 2 15.2933 2 13.2321V3.73214Z"
                            fill="#515151" />
                    </svg>
                </div>
                <NuxtLink to="/styles-category" class="menu-text">Генерации</NuxtLink>
                <div class="menu-count">0</div>
                <div class="menu-arrow">›</div>
            </div>
            <div class="menu-item">
                <div class="menu-icon">
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17.9501 6.18363C18.0695 6.50654 17.9688 6.86658 17.7114 7.0967L16.0963 8.55909C16.1373 8.86716 16.1597 9.18265 16.1597 9.50186C16.1597 9.82106 16.1373 10.1365 16.0963 10.4446L17.7114 11.907C17.9688 12.1371 18.0695 12.4972 17.9501 12.8201C17.786 13.2618 17.5883 13.6849 17.3608 14.0932L17.1855 14.3938C16.9393 14.8021 16.6633 15.1881 16.3611 15.5519C16.1411 15.8191 15.7755 15.9082 15.4473 15.8043L13.3697 15.1473C12.8699 15.5296 12.3178 15.8488 11.7285 16.0901L11.2622 18.2094C11.1876 18.5472 10.9265 18.8144 10.5834 18.8701C10.0686 18.9555 9.53898 19 8.99814 19C8.45729 19 7.92763 18.9555 7.41289 18.8701C7.06973 18.8144 6.80863 18.5472 6.73403 18.2094L6.26779 16.0901C5.67845 15.8488 5.12641 15.5296 4.62659 15.1473L2.55272 15.808C2.22448 15.9119 1.85894 15.8191 1.63887 15.5556C1.33674 15.1918 1.06072 14.8058 0.814545 14.3975L0.639236 14.0969C0.411707 13.6886 0.214018 13.2655 0.0498982 12.8238C-0.0694614 12.5009 0.0312482 12.1408 0.288617 11.9107L1.9037 10.4483C1.86267 10.1365 1.84029 9.82106 1.84029 9.50186C1.84029 9.18265 1.86267 8.86716 1.9037 8.55909L0.288617 7.0967C0.0312482 6.86658 -0.0694614 6.50654 0.0498982 6.18363C0.214018 5.74194 0.411707 5.31881 0.639236 4.91053L0.814545 4.60988C1.06072 4.2016 1.33674 3.81559 1.63887 3.45185C1.85894 3.18461 2.22448 3.09553 2.55272 3.19945L4.63032 3.85642C5.13014 3.47412 5.68218 3.15491 6.27152 2.91366L6.73776 0.794296C6.81236 0.456534 7.07346 0.189295 7.41662 0.13362C7.93136 0.0445399 8.46102 0 9.00187 0C9.54271 0 10.0724 0.04454 10.5871 0.129908C10.9303 0.185583 11.1914 0.452823 11.266 0.790584L11.7322 2.90994C12.3216 3.1512 12.8736 3.4704 13.3734 3.85271L15.451 3.19574C15.7793 3.09181 16.1448 3.18461 16.3649 3.44813C16.667 3.81188 16.943 4.19789 17.1892 4.60617L17.3645 4.90682C17.592 5.3151 17.7897 5.73823 17.9538 6.17992L17.9501 6.18363ZM9.00187 12.4712C9.79327 12.4712 10.5523 12.1583 11.1119 11.6015C11.6715 11.0446 11.9859 10.2894 11.9859 9.50186C11.9859 8.71434 11.6715 7.95908 11.1119 7.40222C10.5523 6.84537 9.79327 6.53253 9.00187 6.53253C8.21046 6.53253 7.45147 6.84537 6.89187 7.40222C6.33226 7.95908 6.01788 8.71434 6.01788 9.50186C6.01788 10.2894 6.33226 11.0446 6.89187 11.6015C7.45147 12.1583 8.21046 12.4712 9.00187 12.4712Z"
                            fill="#515151" />
                    </svg>
                </div>
                <div class="menu-text">Настройки</div>
                <div class="menu-arrow">›</div>
            </div>
            <div class="menu-item">
                <div class="menu-icon">
                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.98906 1.5375L6.50156 3H3C1.34531 3 0 4.34531 0 6V16C0 17.6547 1.34531 19 3 19H21C22.6547 19 24 17.6547 24 16V6C24 4.34531 22.6547 3 21 3H17.4984L17.0109 1.5375C16.7062 0.61875 15.8484 0 14.8781 0H9.12188C8.15156 0 7.29375 0.61875 6.98906 1.5375ZM12 6.5C13.1935 6.5 14.3381 6.97411 15.182 7.81802C16.0259 8.66193 16.5 9.80653 16.5 11C16.5 12.1935 16.0259 13.3381 15.182 14.182C14.3381 15.0259 13.1935 15.5 12 15.5C10.8065 15.5 9.66193 15.0259 8.81802 14.182C7.97411 13.3381 7.5 12.1935 7.5 11C7.5 9.80653 7.97411 8.66193 8.81802 7.81802C9.66193 6.97411 10.8065 6.5 12 6.5Z"
                            fill="#515151" />
                    </svg>
                </div>
                <div @click="showModal = true" class="menu-text">Купить фото</div>
                <PaymentModal :visible="showModal" @close="showModal = false" />
                <div class="menu-arrow">›</div>
            </div>
            <div class="menu-item">
                <div class="menu-icon">
                    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.04531 11.2065L9.80977 18.5271C10.132 18.8308 10.5574 19.0001 11 19.0001C11.4426 19.0001 11.868 18.8308 12.1902 18.5271L19.9547 11.2065C21.2609 9.97846 22 8.25572 22 6.45487V6.20319C22 3.16995 19.8301 0.583671 16.8695 0.0846404C14.9102 -0.245154 12.9164 0.401416 11.5156 1.81606L11 2.33679L10.4844 1.81606C9.08359 0.401416 7.08984 -0.245154 5.13047 0.0846404C2.16992 0.583671 0 3.16995 0 6.20319V6.45487C0 8.25572 0.739062 9.97846 2.04531 11.2065Z"
                            fill="#515151" />
                    </svg>
                </div>
                <a href="https://t.me/king_006x" target="_blank" class="menu-text">
                    Служба заботы
                </a>
                <div class="menu-arrow">›</div>
            </div>
            <div class="menu-item">
                <div class="menu-icon">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11 0C4.92339 0 0 4.92339 0 11C0 17.0766 4.92339 22 11 22C17.0766 22 22 17.0766 22 11C22 4.92339 17.0766 0 11 0ZM16.1008 7.48266C15.9367 9.22137 15.2181 13.444 14.8544 15.3911C14.6992 16.2161 14.3976 16.4911 14.1048 16.5177C13.4661 16.5754 12.9827 16.0964 12.3617 15.6883C11.3948 15.054 10.8448 14.6593 9.90887 14.0383C8.82218 13.3242 9.52742 12.9294 10.144 12.2863C10.3081 12.1177 13.1202 9.55847 13.1734 9.32782C13.1823 9.29677 13.1867 9.19032 13.1202 9.13266C13.0536 9.075 12.9605 9.09718 12.894 9.11048C12.7964 9.13118 11.2499 10.1528 8.25444 12.1754C7.8168 12.477 7.41909 12.6234 7.06129 12.6145C6.66653 12.6056 5.9125 12.3927 5.34919 12.2109C4.66169 11.9891 4.11169 11.8694 4.16048 11.4879C4.18414 11.2898 4.45766 11.0872 4.98105 10.8802C8.18643 9.48454 10.3243 8.56344 11.3948 8.11694C14.4508 6.84839 15.0851 6.62661 15.4976 6.61774C15.5907 6.61774 15.7903 6.63992 15.9234 6.74637C16.0102 6.82272 16.0656 6.92865 16.0786 7.04355C16.1026 7.18861 16.1101 7.33592 16.1008 7.48266Z"
                            fill="#515151" />
                    </svg>
                </div>
                <div class="menu-text">Соцсети</div>
                <div class="menu-arrow">›</div>
            </div>
        </div>
    </div>
</template>
<script setup>
import PaymentModal from '~/components/PaymentModal.vue'
import { ref } from 'vue'
const showModal = ref(false)
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
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
}
.back-button {
    font-size: 24px;
    cursor: pointer;
}
.title {
    font-size: 16px;
    font-weight: bold;
}
.menu-button {
    font-size: 24px;
    cursor: pointer;
}
.profile-title {
    text-align: center;
    font-size: 24px;
    color: #F0A8E1;
    margin: 20px 0;
    font-weight: bold;
}
.profile-photo {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 30px 0;
}
.photo-container {
    width: 120px;
    height: 120px;
    background-color: #000;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.photo-placeholder {
    width: 80px;
    height: 80px;
    border: 2px solid #666;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.emoji-bubble {
    position: absolute;
    top: 0;
    right: 30%;
    background-color: white;
    color: black;
    padding: 5px 8px;
    border-radius: 10px;
    font-size: 18px;
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
.balance-card {
    background-color: #2A2A2A;
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
}
.menu-item:last-child {
    border-bottom: none;
}
.menu-icon {
    margin-right: 15px;
    font-size: 18px;
    width: 24px;
}
.menu-text {
    flex-grow: 1;
    font-size: 16px;
    text-decoration: none;
    color: #fff;
}
.menu-text:hover {
    text-decoration: underline;
}
.menu-count {
    margin-right: 10px;
    color: #888;
}
.menu-arrow {
    color: #888;
    font-size: 18px;
}
</style>