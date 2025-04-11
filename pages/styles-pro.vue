<template>
    <div class="container">
        <div class="up">
            <div class="firstup">99</div>
            <div class="secondup">99</div>
        </div>
        <div class="creator">
            <img src="/images/chat-back.png" alt="">
            <div class="text-fon">
                <div class="text-bg"></div>
                <div class="chat-window" ref="chatWindow">
                    <div v-for="(msg, i) in messages" :key="i" class="message"
                        :class="{ user: msg.from === 'user', bot: msg.from === 'bot' }">
                        <div v-if="msg.image" class="message-with-image">
                            <img :src="msg.image" alt="Generated image" class="message-image">
                            <div class="image-caption">{{ msg.text }}</div>
                        </div>
                        <div v-else>
                            <p style="margin: 0; text-align: left; color: auto;" v-html="parseMessage(msg.text)"></p>
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
            messages.value.unshift({ text: 'Генерирую...✨', from: 'bot', id: 'loading' })
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
                text: 'Если нужно добавить или изменить какие-то моменты, <a href="/creator" class="highlight-link">дайте знать!</a>',
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

.message {
    margin-bottom: 8px;
    padding: 8px 12px;
    border-radius: 16px;
}

.user {
    background-color: #f0f0f0;
    align-self: flex-end;
    margin-left: auto;
}

.bot {
    background-color: #333;
    color: white;
    align-self: flex-start;
}

.chat-window {
    display: flex;
    flex-direction: column;
}

.creator {
    position: relative;
    margin-top: 20rem;
}

.creator img {
    position: fixed;
    margin: auto;
    bottom: 14rem;
    z-index: 0;
}

.text-fon {
    position: relative;
    width: 100%;
    border-radius: 15px;
    padding: 15px;
    margin: 0 auto;
}

.text-bg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(1px);
    border-radius: 15px;
    z-index: 0;
}

.text-fon p {
    /* color: white; */
    text-align: center;
    position: relative;
    z-index: 1;
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
    margin-left: -1rem;
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
    background: #303030;
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
    top: 0.8rem;
    z-index: 1000;
}

.firstup {
    background: #303030;
    color: white;
    border-radius: 20px;
    width: 30px;
    position: relative;
    z-index: 1;
    padding-left: 0.4rem;
    font-size: 14px;
}

.secondup {
    background: white;
    border-radius: 20px;
    width: 30px;
    margin-left: 0.5rem;
    margin-top: -1.28rem;
    font-size: 13px;
}
</style>