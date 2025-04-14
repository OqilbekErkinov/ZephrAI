<template>
    <transition name="fade-scale">
      <div v-if="visible" class="modal-overlay">
        <div class="modal-content">
          <div class="modal-header">
            <button @click="closeModal" class="close-btn">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L13 13M13 1L1 13" stroke="white" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </button>
          </div>
  
          <!-- 👇 Updated Body -->
          <div class="modal-body language-body">
            <div class="language-selection">
              <h2 class="language-title">Выбор языка</h2>
              <label class="language-option">
                <input type="radio" value="uz" v-model="selectedLanguage" />
                O’zbekcha
              </label>
              <label class="language-option">
                <input type="radio" value="ru" v-model="selectedLanguage" />
                Русский
              </label>
              <label class="language-option">
                <input type="radio" value="en" v-model="selectedLanguage" />
                English
              </label>
            </div>
          </div>
  
        </div>
      </div>
    </transition>
  </template>
  
  <script setup>
  const props = defineProps(['visible'])
  const emit = defineEmits(['close'])
  
  const selectedLanguage = ref('ru')
  
  const closeModal = () => {
    emit('close')
  }
  
  watch(() => props.visible, (newVisible) => {
    if (newVisible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
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
    height: 50%;
  }
  
  .modal-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 16px;
  }
  
  .modal-body {
    display: flex;
  }
  
  /* 👇 Language Styles */
  .language-body {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 1rem;
    display: flex;
    color: white;
    width: 70%
  }
  
  .language-selection {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
  
  .language-title {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 1rem;
  }
  
  .language-option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 20px;
  }
  
  .language-option input[type="radio"] {
    appearance: none;
    width: 1rem;
    height: 1rem;
    border: 2px solid white;
    border-radius: 50%;
    position: relative;
    outline: none;
    cursor: pointer;
  }
  
  .language-option input[type="radio"]:checked::before {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 6px;
    height: 6px;
    background-color: white;
    border-radius: 50%;
  }
  
  .close-btn {
    color: white;
    font-size: 20px;
    font-weight: regular;
    background: transparent;
    border: none;
    cursor: pointer;
    margin-bottom: -3rem;
  }
  
  /* Animation */
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
  