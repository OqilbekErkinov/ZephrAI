<template>
    <div v-if="visible" class="modal-overlay">
        <div class="modal-content">
            <div class="modal-header">
                <svg class="mb-4 info-icon" width="20" height="20" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.8125 6.5C0.8125 3.35888 3.35888 0.8125 6.5 0.8125C9.64112 0.8125 12.1875 3.35888 12.1875 6.5C12.1875 9.64112 9.64112 12.1875 6.5 12.1875C3.35888 12.1875 0.8125 9.64112 0.8125 6.5ZM6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C10.0899 13 13 10.0899 13 6.5C13 2.91015 10.0899 0 6.5 0ZM6.31632 3.4125C6.08747 3.4125 5.90195 3.59802 5.90195 3.82687V4.02035C5.90195 4.24471 6.08383 4.4266 6.3082 4.4266C6.34507 4.4266 6.38079 4.42169 6.41475 4.41248C6.44871 4.42169 6.48444 4.4266 6.52131 4.4266C6.74568 4.4266 6.92756 4.24471 6.92756 4.02035V3.82687C6.92756 3.59802 6.74204 3.4125 6.51319 3.4125H6.31632ZM5.45574 5.63007C5.23137 5.63007 5.04949 5.81196 5.04949 6.03632C5.04949 6.26069 5.23137 6.44257 5.45574 6.44257H5.98719V8.775H5.2C4.97563 8.775 4.79375 8.95688 4.79375 9.18125C4.79375 9.40562 4.97563 9.5875 5.2 9.5875H6.39344H7.8C8.02436 9.5875 8.20625 9.40562 8.20625 9.18125C8.20625 8.95688 8.02436 8.775 7.8 8.775H6.79969V6.04445C6.79969 5.8156 6.61417 5.63007 6.38532 5.63007H5.45574Z"
                            fill="#808080" />
                    </svg>
                <span class="modal-title">Кредит — это ваше оставшееся <br>
                    количество фото для генерации.</span>
                <button @click="closeModal" class="close-btn">&times;</button>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['visible'])
const emit = defineEmits(['close'])

const methods = [
    { name: 'Click', icon: '/images/click.png', link: '/premium' },
    { name: 'Payme', icon: '/images/payme.png', link: 'https://payme.uz/pay' },
    { name: 'Visa', icon: '/images/visa.png', link: '/creator-pro' },
    { name: 'YooKassa', icon: '/images/yookassa.png', link: 'https://yookassa.ru/pay' },
]

const closeModal = () => {
    emit('close')
}

const pay = (method) => {
    window.location.href = method.link
}

watch(() => props.visible, (newVisible) => {
    if (newVisible) {
        document.body.style.overflow = 'hidden';
        // window.scrollTo(0, 0);
    } else {
        document.body.style.overflow = 'auto';
    }
})
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    backdrop-filter: blur(4px);
    z-index: 50;
    overflow-y: auto;
}

.modal-content {
    background-color: black;
    border-radius: 1rem 1rem 0 0;
    padding: 35px 16px 16px 16px;
    width: 100%;
    max-width: 500px;
    height: 60%;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.modal-title {
    color: white;
    font-size: 1rem;
    font-weight: regular;
}

.close-btn {
    color: white;
    font-size: 2rem;
    font-weight: regular;
    background: transparent;
    border: none;
    cursor: pointer;
    margin-right: 1rem;
    /* margin-left: 3rem; */
    margin-top: -1.7rem
}
.info-icon {
    /* margin-right: -1.4rem; */
    margin-left: 2rem;
    margin-top: -0.2rem
}
</style>