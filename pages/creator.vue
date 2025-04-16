<template>
    <div class="container">
        <div class="up" @click="showExpanded = !showExpanded">
        <div :class="['toggle-wrapper', { expanded: showExpanded }]">
          <span class="toggle-text" :class="{ visible: showExpanded }">Генераций осталось</span>
          <div class="toggle-count">{{ count }}</div>
        </div>
        <div class="just-background" v-show="!showExpanded"></div>
      </div>
  
      <div class="creator">
        <img src="/images/chat-back.png" alt="">
        <div class="text-fon">
          <div class="text-bg"></div>
          <p>
            Режим «Создатель» где ты сможешь воплотить свои самые смелые идеи
            Оплачивай и начинаем прямо <br />
            сейчас!
            <NuxtLink to="/styles" style="color: #F0A8E1">PREMIUM</NuxtLink>
          </p>
        </div>
      </div>
  
      <form style="display: flex; justify-content: center; width: 100%; position: relative;">
        <input class="creator-input me-2" placeholder="Напиши..." disabled />
        <button type="submit" class="submit-btn">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="20" fill="#808080" />
            <path
              d="M20 11.5V28.5M20 11.5L14 18.7857M20 11.5L26 18.7857"
              stroke="#333333"
              stroke-width="1.96429"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const showExpanded = ref(false)
  const count = ref(100)
  </script>
  
  <style scoped>
  .creator {
    position: relative;
  }
  
  .creator img {
    position: fixed;
    /* right: 0; */
    /* left: 2.5rem; */
    bottom: 14rem;
    z-index: 0;
  }
  
  .text-fon {
    position: relative;
    width: 90%;
    border-radius: 15px;
    padding: 15px;
    margin: 0 auto;
    margin-top: 12rem;
    margin-bottom: 13rem;
  }
  
  .text-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    z-index: 0;
  }
  
  .text-fon p {
    color: white;
    text-align: center;
    position: relative;
    z-index: 1;
  }
  
  .creator-input {
    border-radius: 20px;
    border: 1px solid #474747;
    background: #191919;
    margin-bottom: 3rem;
    height: 40px;
    width: 80%;
    color: white;
    outline: none;
    padding-left: 1rem;
    position: fixed;
    bottom: 4.7rem;
    left: 0.8rem;
  }
  
  .submit-btn {
    border: none;
    background: transparent;
    margin-bottom: 3rem;
    cursor: pointer;
    padding: 0;
    position: fixed;
    bottom: 4.7rem;
    right: 0.8rem;
  }
  
  .up {
    position: fixed;
    top: 1.8rem;
    left: 1rem;
    z-index: 1000;
    perspective: 1000px;
}
  
.toggle-wrapper {
    display: flex;
    align-items: center;
    height: 32px;
    border-radius: 999px;
    background: transparent;
    cursor: pointer;
    position: relative;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform-style: preserve-3d;
    will-change: transform, width;
}
  
.toggle-wrapper.expanded {
    background: white;
    padding-left: 12px;
    transform: translateZ(0);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
  
.toggle-text {
    font-size: 14px;
    color: black;
    margin-right: 10px;
    overflow: hidden;
    white-space: nowrap;
    max-width: 0;
    opacity: 0;
    transition: all 0.4s ease 0.1s;
    transform: translateX(-10px);
}
  
.toggle-text.visible {
    max-width: 300px;
    opacity: 1;
    transform: translateX(0);
}
  
.toggle-count {
    background: #303030;
    color: white;
    min-width: 36px;
    height: 32px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    z-index: 1;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    padding: 0 10px;
    transform: translateZ(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.toggle-wrapper.expanded .toggle-count {
    transform: translateZ(10px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
  
.just-background {
    background: #ffffff;
    width: 36px;
    height: 28px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    z-index: -1;
    position: absolute;
    top: 2px;
    left: 1.5rem;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: scale(1);
    opacity: 1;
}

.just-background.v-show-false {
    transform: scale(0.8);
    opacity: 0;
}
</style>