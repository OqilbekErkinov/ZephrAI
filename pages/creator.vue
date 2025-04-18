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
      <div class="textt-fon">
        <div class="textt-bg"></div>
        <p>
          Режим «Создатель» где ты сможешь воплотить свои самые смелые идеи
          Оплачивай и начинаем прямо <br />
          сейчас!
          <NuxtLink to="/styles" style="color: #F0A8E1">PREMIUM</NuxtLink>
        </p>
      </div>
    </div>
    <form style="display: flex; justify-content: center; width: 100%; position: relative;">
      <input class="chat-input me-2" placeholder="Напиши..." disabled />
      <button type="submit" class="chat-btn">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="20" fill="#808080" />
          <path d="M20 11.5V28.5M20 11.5L14 18.7857M20 11.5L26 18.7857" stroke="#333333" stroke-width="1.96429"
            stroke-linecap="round" />
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