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
                <div class="chat-window" ref="chatWindow">
                    <div v-for="(msg, i) in messages" :key="i" class="message"
                        :class="{ user: msg.from === 'user', bot: msg.from === 'bot' }">
                        <div v-if="msg.image" class="message-with-image">
                            <img :src="msg.image" alt="Generated image" class="message-image" />
                            <div class="image-caption">{{ msg.text }}</div>
                        </div>
                        <div v-else>
                            <div v-if="msg.id === 'loading'" class="loading-message">
                                <p style="margin: 0; text-align: left;">Генерирую...
                                    <svg width="25" height="28" viewBox="0 0 28 31" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.70508 13.742C16.4669 13.1028 14.585 11.0255 16.1532 0.319336C17.7215 11.0255 15.8396 13.1028 27.6014 13.742C15.8396 14.3812 17.7215 16.4585 16.1532 27.1647C14.585 16.4585 16.4669 14.3812 4.70508 13.742Z"
                                            fill="#FADC39" />
                                        <g filter="url(#filter0_f_221_2250)">
                                            <path
                                                d="M8.15527 13.7417C16.2765 13.3003 14.9771 11.866 16.06 4.47363C17.1428 11.866 15.8434 13.3003 23.9647 13.7417C15.8434 14.183 17.1428 15.6173 16.06 23.0097C14.9771 15.6173 16.2765 14.183 8.15527 13.7417Z"
                                                fill="white" fill-opacity="0.7" />
                                        </g>
                                        <path
                                            d="M4.07715 4.63402C8.13778 4.41335 7.48808 3.69618 8.02949 0C8.57091 3.69618 7.92121 4.41335 11.9818 4.63402C7.92121 4.85469 8.57091 5.57186 8.02949 9.26804C7.48808 5.57186 8.13778 4.85469 4.07715 4.63402Z"
                                            fill="#FADC39" />
                                        <g filter="url(#filter1_f_221_2250)">
                                            <path
                                                d="M5.26855 4.63425C8.07232 4.48189 7.62372 3.9867 7.99755 1.43457C8.37139 3.9867 7.92279 4.48189 10.7266 4.63425C7.92279 4.78662 8.37139 5.28181 7.99755 7.83393C7.62372 5.28181 8.07232 4.78662 5.26855 4.63425Z"
                                                fill="white" fill-opacity="0.7" />
                                        </g>
                                        <path
                                            d="M0 23.9694C6.16095 23.6346 5.1752 22.5465 5.99666 16.9385C6.81812 22.5465 5.83237 23.6346 11.9933 23.9694C5.83237 24.3042 6.81812 25.3923 5.99666 31.0003C5.1752 25.3923 6.16095 24.3042 0 23.9694Z"
                                            fill="#FADC39" />
                                        <g filter="url(#filter2_f_221_2250)">
                                            <path
                                                d="M1.80762 23.9699C6.06161 23.7387 5.38097 22.9874 5.94817 19.1152C6.51537 22.9874 5.83473 23.7387 10.0887 23.9699C5.83473 24.2011 6.51537 24.9524 5.94817 28.8246C5.38097 24.9524 6.06161 24.2011 1.80762 23.9699Z"
                                                fill="white" fill-opacity="0.7" />
                                        </g>
                                    </svg>
                                </p>
                            </div>
                            <p v-else style="margin: 0; text-align: left; color: auto;" v-html="parseMessage(msg.text)">
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <form @submit.prevent="sendMessage" style="display: flex; justify-content: center; width: 100%;">
            <input v-model="newMessage" class="creator-input me-2" placeholder="Напиши..." />
            <button type="submit" class="submit-btn">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="20" fill="#fff" />
                    <path d="M20 11.5V28.5M20 11.5L14 18.7857M20 11.5L26 18.7857" stroke="#333333"
                        stroke-width="1.96429" stroke-linecap="round" />
                </svg>
            </button>
        </form>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted, nextTick, watch } from 'vue'

const showExpanded = ref(false)
const count = ref(100)

const route = useRoute()
const messages = ref([])
const newMessage = ref('')
const chatWindow = ref(null)

const scrollToBottom = async () => {
    await nextTick()
    if (chatWindow.value) {
        chatWindow.value.scrollTop = 0
    }
}

const sendMessage = () => {
    if (newMessage.value.trim()) {
        messages.value.unshift({ text: newMessage.value, from: 'user' })
        newMessage.value = ''
        setTimeout(() => {
            messages.value.unshift({ text: 'Получил ваше сообщение! Чем ещё могу помочь?', from: 'bot' })
            scrollToBottom()
        }, 1000)
        scrollToBottom()
    }
}

watch(messages, () => {
    scrollToBottom()
}, { deep: true })

onMounted(() => {
    const selectedType = route.query.type
    if (selectedType) {
        messages.value.unshift({ text: selectedType, from: 'user' })
        setTimeout(() => {
            messages.value.unshift({
                text: 'Генерирую...',
                from: 'bot',
                id: 'loading',
            })
            scrollToBottom()
        }, 1000)

        setTimeout(() => {
            messages.value = messages.value.filter(m => m.id !== 'loading')
            messages.value.unshift({
                text: 'Готово!',
                from: 'bot',
                // image: '/images/pro1.png'
            })
            scrollToBottom()
        }, 6000)
        setTimeout(() => {
            messages.value.unshift({
                text: 'Хочешь больше стиля?<br/><a href="/styles-category" class="highlight-link">Новые стили уже тут!</a>',
                from: 'bot'
            })
            scrollToBottom()
        }, 8000)
    }
    scrollToBottom()
})

const parseMessage = (text) => {
    return text.replace(
        /<a href="([^"]+)" class="highlight-link">([^<]+)<\/a>/g,
        (match, path, label) => {
            return `<a href="${path}" class="highlight-link" style="color: #F0A8E1">${label}</a>`
        }
    )
}
</script>

<style scoped>
.message-with-image {
    display: flex;
    flex-direction: column;
}

.message-image {
    max-width: 100%;
    border-radius: 8px;
    margin-left: -1rem;
    right: auto !important;
}

.image-caption {
    font-weight: 500;
    margin-top: 4px;
}

.creator {
    position: relative;
    margin-top: 20rem;
}

.creator img {
    position: fixed;
    margin: auto;
    /* left: 2.5rem; */
    bottom: 14rem;
    z-index: 0;
}

.chat-window {
    position: fixed;
    bottom: 5rem;
    z-index: 2;
    display: flex;
    flex-direction: column-reverse;
    max-height: 71%;
    width: 92%;
    overflow-y: auto;
    margin-bottom: 5rem;
}

.message {
    max-width: 100%;
    padding: 8px 12px;
    margin: 5px 0;
    border-radius: 15px;
    font-size: 14px;
    word-break: break-word;
}

.message.user {
    background: white;
    align-self: flex-end;
    color: black !important;
}

.message.bot {
    background: #2A2A2A;
    align-self: flex-start;
    color: white;
}

.creator-input {
    border-radius: 20px;
    border: 1px solid #474747;
    background: #191919;
    margin-bottom: 3rem;
    height: 40px;
    width: 78%;
    color: white;
    outline: none;
    padding-left: 1rem;
    position: fixed;
    bottom: 4rem;
    left: 0.8rem;
}

.submit-btn {
    border: none;
    background: transparent;
    margin-bottom: 3rem;
    cursor: pointer;
    padding: 0;
    position: fixed;
    bottom: 4rem;
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