<template>
    <transition name="fade-scale">
    <div v-if="visible" class="modal-overlay">
        <div class="modal-content">
            <div class="modal-header">
                <button @click="closeModal" class="close-btn">
                    <svg width="14" height="14" viewBox="0 0 14 14"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L13 13M13 1L1 13" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                </button>
            </div>
            <div class="modal-body">
                <a href="https://instagram.com/king_006x" target="_blank" class="modal-item">
                    <img src="/images/icon-instagram.png" class="icon" />
                </a>
                <a href="https://t.me/king_006x" target="_blank" class="modal-item">
                    <img src="/images/icon-telegram.png" class="icon" />
                </a>
                <a href="https://facebook.com/King_006x" target="_blank" class="modal-item">
                    <img src="/images/icon-facebook.png" class="icon" />
                </a>
            </div>
        </div>
    </div>
</transition>
</template>

<script setup>
const props = defineProps(['visible'])
const emit = defineEmits(['close'])

const closeModal = () => {
    emit('close')
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
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    backdrop-filter: blur(10px);
    z-index: 50;
    overflow-y: auto;
}

.modal-content {
    background-color: #131313;
    border-radius: 1rem 1rem 0 0;
    padding: 26px 16px 16px 16px;
    width: 100%;
    max-width: 500px;
    height: 45%;
}

.modal-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 16px;
}

.modal-body {
    display: flex;
    margin: auto;
}

.modal-item {
    margin-left: 1rem;
}

.modal-title {
    color: white;
    font-size: 1.5rem;
    font-weight: regular;
}

.modal-text {
    color: white;
    font-size: 1.2rem;
    font-weight: regular;
}

.close-btn {
    color: white;
    font-size: 2rem;
    font-weight: regular;
    background: transparent;
    border: none;
    cursor: pointer;
    margin-top: -1rem;
}

.pereyti-btn {
    background-color: #F0A8E1;
    color: white;
    padding: 10px;
    border-radius: 10px;
    margin-top: 2rem;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s ease;
}

.pereyti-btn:hover {
    background-color: #ff86e5;
}
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.fade-scale-enter-to,
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1);
}

</style>