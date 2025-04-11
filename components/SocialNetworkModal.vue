<template>
    <div v-if="visible" class="modal-overlay">
        <div class="modal-content">
            <div class="modal-header">
                <button @click="closeModal" class="close-btn">&times;</button>
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
</style>