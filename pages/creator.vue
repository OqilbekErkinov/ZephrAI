<template>
    <div class="container">
        <div class="up" @click="showExpanded = !showExpanded">
            <div :class="['toggle-wrapper', { expanded: showExpanded }]">
                <span v-if="showExpanded" class="toggle-text">Генераций осталось</span>
                <div class="toggle-count">{{ count }}</div>
            </div>
            <div class="just-background"  v-show="!showExpanded"></div>
        </div>
        <div class="creator">
            <img src="/images/chat-back.png" alt="">
            <div class="text-fon">
                <div class="text-bg"></div>
                <p>Режим «Создатель» где ты сможешь воплотить свои самые смелые идеи
                    Оплачивай и начинаем прямо <br> сейчас! <NuxtLink to="/styles" style="color: #F0A8E1">PREMIUM
                    </NuxtLink>
                </p>
            </div>
        </div>
        <form style="display: flex; justify-content: center; width: 100%; position: relative;">
            <input class="creator-input me-2" placeholder="Напиши..." disabled />
            <button type="submit" class="submit-btn" c>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="20" fill="#808080" />
                    <path d="M20 11.5V28.5M20 11.5L14 18.7857M20 11.5L26 18.7857" stroke="#333333"
                        stroke-width="1.96429" stroke-linecap="round" />
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
    right: 0;
    left: 2.5rem;
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
    z-index: 1000;
}
.toggle-wrapper {
    display: flex;
    align-items: center;
    background: transparent;
    color: white;
    border-radius: 999px;
    padding: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    width: fit-content;
    margin-right: -1rem !important;
}
.toggle-wrapper .toggle-count {
    background: #303030;
    color: white;
    width: 36px;
    height: 30px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    z-index: 1;
    transition: all 0.3s ease;
    text-align: center;
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
    z-index: 1;
    transition: all 0.3s ease;
    margin-top: -2.05rem;
    margin-left: 1rem;
}
.toggle-wrapper .toggle-text {
    font-size: 14px;
    color: black;
    margin-right: 10px;
    transition: opacity 0.6s ease;

}
.toggle-wrapper.expanded {
    background: white;
    padding: 0cap 12px;
    padding-right: 10px;
    
}
.toggle-wrapper.expanded .toggle-count {
    background: #303030;
    color: white;
    margin-right: -1rem;
    z-index: 3;
    position: relative;
    padding: 0 10px;
}
.toggle-wrapper:not(.expanded) .toggle-text {
    display: none;
}
</style>