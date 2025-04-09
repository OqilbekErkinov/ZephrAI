<template>
    <div v-if="visible" class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <span class="modal-title">Выберите тип оплаты</span>
          <button @click="closeModal" class="close-btn">&times;</button>
        </div>
        <div class="payment-methods">
          <button v-for="method in methods" :key="method.name" @click="pay(method)" class="payment-button">
            <img :src="method.icon" :alt="method.name" class="payment-icon" />
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps(['visible'])
  const emit = defineEmits(['close'])
  
  const methods = [
    { name: 'Click', icon: '/images/click.png', link: 'http://localhost:3000/premium/' },
    { name: 'Payme', icon: '/images/payme.png', link: 'https://payme.uz/pay' },
    { name: 'Visa', icon: '/images/visa.png', link: 'https://visa.com/pay' },
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
    padding: 16px;
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
  }
  
  .close-btn {
    color: white;
    font-size: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  
  .payment-methods {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  .payment-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    background: transparent;
    border-radius: 0.375rem;
    transition: background-color 0.2s;
    border: none;
    cursor: pointer;
    z-index: 1;
  }
  
  .payment-button:hover {
    background: rgba(255, 255, 255, 0.001);
  }
  
  .payment-icon {
    height: 1.7rem;
  }
  
  .fixed-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #333;
    z-index: 100;
  }
  </style>
  